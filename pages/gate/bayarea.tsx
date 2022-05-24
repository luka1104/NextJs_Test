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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

const bayarea = ({ state }) => {

  return (
    <>
      {state === '1D:F9:39:B9:6E:00:00' ? (
        <PageLayout
          title='Gateway'
          description=''
        >
          <>
          <Stack
            spacing={1}
            py={12}
            align='center'
            h='100vh'
            w='100%'
            direction={{ base: 'column', md: 'row' }}
          >
            <VStack
              spacing={4}
              align='start'
              w={{ base: '100%', md: '50%' }}
              py={{ base: 0, md: 0 }}
            >
              <Image
                src='/assets/images/Logo.png'
                h={50}
                fit='cover'
                fallback={<Skeleton w={{ base: '100%', md: '50%' }} h={50} />}
              />
              <Heading as='h1' paddingLeft='60%'>
                Bayarea
              </Heading>
              <Divider />
              <Heading color='black' fontSize='16px'>
                  test description test is test test A test B Test C Testing now Test Description Test Test Testing AAA aaaa aaa a a aaaaaaaa Join our Exclusive NFT Gated Discord Community!! 
              </Heading>
              <HStack
                spacing={4}
                w='full'
                justify={{ base: 'center', md: 'flex-start' }}
              >
              </HStack>
            </VStack>
            <Center w={{ base: '100%', md: '50%' }}>
              <Image
                src='/assets/images/rainbow_key.png'
                h={300}
                fit='cover'
                fallback={<Skeleton w={{ base: '100%', md: '50%' }} h={300} />}
              />
            </Center>
            <Heading color='black' paddingBottom='10px' fontSize='20px'>
              Tap to Join our Discord!
            </Heading>
            <FontAwesomeIcon fontSize='30px' opacity='0.7' icon={faAngleDoubleDown} />
            {/* <Link href="https://discord.com/api/oauth2/authorize?client_id=976977788500316182&redirect_uri=https%3A%2F%2Fnext-js-test-luka.vercel.app%2Fdiscord%2Fbayarea&response_type=code&scope=identify%20email%20connections%20guilds.join"> */}
            <Link href="https://discord.com/api/oauth2/authorize?client_id=978499281294090270&redirect_uri=https%3A%2F%2Fnext-js-test-luka.vercel.app%2Fdiscord%2Fbayarea&response_type=code&scope=identify%20email%20connections%20guilds.join" rel="noopener noreferrer">
              <Button
                paddingTop='30px'
                color='#7289da'
                variant='ghost'
                fontSize='40px'
              >
                <FontAwesomeIcon icon={faDiscord} />
              </Button>
            </Link>
          </Stack>
          </>
        </PageLayout>
      ) : (
        <div>
          <PageLayout
            title='Gateway'
            description=''
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
                  Sorry! You do not have a right to Access This Page! Tap The NFC Card Again!
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
