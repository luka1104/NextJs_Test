import React, { useState, useEffect } from 'react'
import ExternalLink from '@/components/external-link';
import PageLayout from '@/components/page-layout';
import {
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiExternalLink } from '@react-icons/all-files/fi/FiExternalLink';
import { ImSphere } from '@react-icons/all-files/im/ImSphere';
import { Trans, useTranslation } from 'react-i18next';
import { GITHUB_PROFILE, WEBSITE } from 'src/constants';
import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import mintNFT  from './utils/mint'

const IndexPage = () => {
  const [address, setAddress] = useState<string>('')
  const { t } = useTranslation();
  const { data } = useAccount()
  const [reqMint,setReqMint]= useState<boolean>(false)
  const { connect } = useConnect({
    onConnect(data) {
      setAddress(data.account);
    },
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  const mint =()=>{
    mintNFT(address)
  }
  const {
    activeChain,
    chains,
    error,
    isLoading,
    pendingChainId,
    switchNetwork,
  } = useNetwork({
    chainId: 80001
  })
 
  const switchChain = () => {
    if (activeChain) {
      if (activeChain.id === 80001) {
        console.log(activeChain.name);
      } else {
        switchNetwork?.(80001)
      }
    }
  }

  useEffect(() => {
    switchChain()
  }, [address,reqMint])

  return (
    <PageLayout
      title='Home'
      description='Discover a starter kit which includes Next.js, Chakra-UI, Framer-Motion in Typescript. You have few components, Internationalization, SEO and more in this template ! Enjoy coding.'
    >
      {isLoading?"loading":
      <>
      <Stack
        spacing={4}
        py={12}
        align='center'
        h='100vh'
        w='100%'
        direction={{ base: 'column', md: 'row' }}
      >
        <VStack
          spacing={2}
          align='start'
          w={{ base: '100%', md: '50%' }}
          py={{ base: 20, md: 0 }}
        >
          <Heading as='h1'>Alexandre GOSSARD</Heading>
          <Divider />
          <Text color='gray.500' align='justify'>
            <Trans i18nKey='excerpt'>
              <strong>Student</strong>
              by day,
              <strong>mad developer</strong>
              by night. Passionate about computer science and
              <strong>new technologies</strong>, currently
              <ExternalLink href='https://nextjs.org/'>
                Next.js
              </ExternalLink>&{' '}
              <ExternalLink href='https://chakra-ui.com/'>
                Chakra UI
              </ExternalLink>
              , I develop in order to propose different{' '}
              <strong>opensource</strong>
              contents.
            </Trans>
          </Text>
          <HStack
            spacing={4}
            w='full'
            justify={{ base: 'center', md: 'flex-start' }}
          >
            {data ? (
              <Button
              onClick={() => mint()}
              colorScheme='brand'
              variant='ghost'
            >
              Mint NFT
            </Button>
            ) : (
              <Button
                onClick={() => connect()}
                colorScheme='brand'
                variant='ghost'
              >
                Connect Wallet
              </Button>
            )}
            <Link href="https://metamask.app.link/dapp/next-js-test-luka.vercel.app/">
              <Button
                
                colorScheme='brand'
                variant='ghost'
              >
                Connect with MetaMask
              </Button>
            </Link>
            {/* <Link href="https://metamask.app.link/dapp/next-js-test-luka.vercel.app/">
              <Button
                
                colorScheme='brand'
                variant='ghost'
              >
                Connect with Phantom
              </Button>
            </Link> */}
          </HStack>
        </VStack>
        <Center w={{ base: '100%', md: '50%' }}>
          <Image
            src='/assets/images/home.jpg'
            h={500}
            fit='cover'
            fallback={<Skeleton w={{ base: '100%', md: '50%' }} h={500} />}
          />
        </Center>
      </Stack>
      </>
}
    </PageLayout>
  
  );
};

export default IndexPage;
