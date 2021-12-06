import React from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

const WisotgeApp = function ({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default WisotgeApp;
