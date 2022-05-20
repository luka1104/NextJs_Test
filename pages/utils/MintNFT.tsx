import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { useEffect } from 'react';
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const tokenURI = process.env.TOKEN_URI;
const web3 = createAlchemyWeb3(
  `https://polygon-mumbai.g.alchemy.com/v2/${API_KEY}`
);

const contract = require('../../contract/MyNFT.json');
const contractAddress = process.env.CONTRACT_ADDRESS;
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

function MintNFT(address: string, minting: boolean): void {
  useEffect(() => {
    let mitedProcess = true;
    const mintFunction = async (address: string) => {
      const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest');
      const data = await nftContract.methods
        .mintNFT(address, tokenURI)
        .encodeABI();
      const tx = {
        from: address,
        to: contractAddress,
        nonce: nonce,
        gas: 500000,
        data: data,
      };
      const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (error, hash) {
          if (!error) {
            console.log(
              '🎉 The hash of your transaction is: ',
              hash,
              "\n Check Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            console.log(
              'Something went wrong while submitting your transaction:',
              error
            );
          }
        }
      );
    };
    if (minting && address) {
      mintFunction(address);
    }
    return () => {
      mitedProcess = false;
    };
  }, [address, minting]);
}

export default MintNFT;
