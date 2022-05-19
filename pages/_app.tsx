import Layout from '@/components/layout';
import React, { useState } from 'react'
import '@/internationalization/i18n';
import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/josefin-sans/700.css';
import { AppProps } from 'next/app';
import { WagmiProvider, createClient } from 'wagmi';

const client = createClient()


const App = ({ Component, pageProps }: AppProps) => {
  const [state, setState] = useState<string>('')
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} state={state} setState={setState} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
