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
import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

const IndexPage = () => {
  const [minting, setMintig] = useState<boolean>(false);
  const { t } = useTranslation();
  // const mint = MintNFT(address, minting);
  return (
    <PageLayout
      title='Home'
      description='Discover a starter kit which includes Next.js, Chakra-UI, Framer-Motion in Typescript. You have few components, Internationalization, SEO and more in this template ! Enjoy coding.'
    >
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
              <Link href='https://metamask.app.link/dapp/next-js-test-luka.vercel.app/'>
                <Button
                  colorScheme='brand'
                  variant='ghost'
                  // onClick={() => {
                  //   setMintig(true);
                  // }}
                >
                  Connect with MetaMask
                </Button>
              </Link>
            </HStack>
          </VStack>
          <Center w={{ base: '100%', md: '50%' }}>
            <Image
              alt='alt:destore key '
              src='/assets/images/home.jpg'
              h={500}
              fit='cover'
              fallback={<Skeleton w={{ base: '100%', md: '50%' }} h={500} />}
            />
          </Center>
        </Stack>
      </>
    </PageLayout>
  );
};

export default IndexPage;
