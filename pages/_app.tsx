import Layout from '@/components/layout';
import '@/internationalization/i18n';
import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/josefin-sans/700.css';
import { AppProps } from 'next/app';
import { WagmiProvider, createClient } from 'wagmi';

const client = createClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <WagmiProvider client={client}>
          <Component {...pageProps} />
        </WagmiProvider>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
