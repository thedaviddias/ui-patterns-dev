import type { AppProps } from 'next/app';
import * as React from 'react';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps<{ dehydratedState: string }>) {
  const getLayout =
    (Component as any).getLayout || ((page: React.ReactElement) => page);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default App;
