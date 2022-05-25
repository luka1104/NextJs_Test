import React, { useState } from 'react'
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
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import "@fontsource/dm-sans";

const Bayarea = ({ state }) => {
  const [link, setLink] = useState('/nfc/wqx72dbds3tnqnft')
  return (
    <>
      {state ? (
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
              <Center w={{ base: '100%', md: '50%' }}>
                <Image
                  src='/assets/images/STORE_0_logo.svg'
                  h='80px'
                  fit='cover'
                  paddingBottom='22px'
                  fallback={<Skeleton w={{ base: '100%', md: '50%' }} h={50} />}
                />
              </Center>
              <Center w={{ base: '100%', md: '50%' }}>
                <Heading color='black' fontSize='16px' fontFamily='Dm Sans'>
                  STORE_0 is the world’s first store<br/>
                  run by a DAO.<br/>
                  Below is a members-only channel where<br/>
                  you have an exclusive access ONLY via<br/>
                  tapping the tag at 348 Hayes St.<br/>
                  You can drop your ENS to<br/>
                  be whitelisted there.
                </Heading>
              </Center>
              <HStack
                spacing={4}
                w='full'
                justify={{ base: 'center', md: 'flex-start' }}
              >
              </HStack>
            </VStack>
            <Center w={{ base: '100%', md: '50%' }}>
              <Image
                src='/assets/images/rainbow.png'
                h={200}
                paddingBottom='20px'
                fit='cover'
                fallback={<Skeleton w={{ base: '100%', md: '50%' }} h={300} />}
              />
            </Center>
            <Center position='relative'>
              <Image 
                src='/assets/images/green_pill.png'
                width='65%'
              />
              <Heading
                color='black'
                paddingBottom='10px'
                fontFamily='Dm Sans'
                fontSize='16px'
                position='absolute'
                top='61%'
                left='50%'
                transform='translate(-50%,-50%)'
                whiteSpace='nowrap'
              >
                Join an exclusive channel
              </Heading>
            </Center>
            <FontAwesomeIcon fontSize='30px' opacity='0.7' icon={faAngleDoubleDown} />
            {/* <Link href="https://discord.com/api/oauth2/authorize?client_id=976977788500316182&redirect_uri=https%3A%2F%2Fnext-js-test-luka.vercel.app%2Fdiscord%2Fbayarea&response_type=code&scope=identify%20email%20connections%20guilds.join"> */}
            {state === '1D:F9:39:B9:6E:00:00' ? (
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
            ) : (
              <Link href={link}>
                <Button
                  onDragStart={() => {setLink('/')}}
                  onClick={() => {setLink('/nfc/wqx72dbds3tnqnft')}}
                  userSelect='none'
                  pointerEvents='none'
                  paddingTop='30px'
                  variant='ghost'
                  fontSize='40px'
                  color='#7289da'
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </Button>
              </Link>
            )}
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
                <Heading as='h1' fontFamily='Dm Sans'>
                  Sorry, you do not have<br/>
                  an access to this page.<br/>
                  Please tap the tag at<br/>
                  STORE_0, 348 Hayes St.
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

export default Bayarea
