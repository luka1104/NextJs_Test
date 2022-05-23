import React from 'react'
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
  VStack
} from '@chakra-ui/react';

const bayarea = ({ state }) => {

  return (
    <>
      {state === '1D:F9:39:B9:6E:00:00' ? (
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
              <Heading as='h1'>DeStore Bayarea</Heading>
              <Divider />
              <Text color='gray.500' align='justify'>
                  <strong>Join our Exclusive NFT Gated Discord Community!!</strong>
              </Text>
              <HStack
                spacing={4}
                w='full'
                justify={{ base: 'center', md: 'flex-start' }}
              >
                {/* <Link href="https://discord.com/api/oauth2/authorize?client_id=976977788500316182&redirect_uri=https%3A%2F%2Fdiscord.gg%2Fp79RBa2m&response_type=code&scope=identify%20email"> */}
                <Link href="https://discord.com/api/oauth2/authorize?client_id=976977788500316182&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdiscord%2Fbayarea&response_type=code&scope=email%20guilds.join%20identify%20connections" rel="noopener noreferrer">
                  <Button
                    colorScheme='brand'
                    variant='ghost'
                  >
                    Join our Discord and Claim your NFT!
                  </Button>
                </Link>
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
        </PageLayout>
      ) : (
        <div>
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
                <Heading as='h1'>
                  Sorry! You do not have a right to Access This Page! Scan The NFC Again!
                </Heading>
              </VStack>
            </Stack>
            </>
          </PageLayout>
        </div>
      )}
    </>
  )
}

export default bayarea
