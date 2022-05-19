import { createAlchemyWeb3 } from '@alch/alchemy-web3'
const API_KEY = process.env.API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const PUBLIC_KEY = process.env.PUBLIC_KEY
const tokenURI = process.env.TOKEN_URI
const web3 = createAlchemyWeb3(`https://polygon-mumbai.g.alchemy.com/v2/${API_KEY}`)

const contract = require("../../contract/MyNFT.json")
const contractAddress = process.env.CONTRACT_ADDRESS
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

export const mintNFT = async (address) => {  
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest")
  const tx = {
    from: address,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods.mintNFT(address, tokenURI).encodeABI(),
  }

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            )
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            )
          }
        }
      )
    })
    .catch((err) => {
      console.log("Promise failed:", err)
    })
};

export default mintNFT;
