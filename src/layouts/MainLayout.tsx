import React from 'react';
import Head from 'next/head';
import { Grommet } from 'grommet';
import { grommetTheme } from 'src/styles';
import { SITE_NAME } from 'src/constants';
import 'src/styles/global.scss';

const MainLayout = ({ pageTitle = SITE_NAME, children, ...props }) => (
  <Grommet theme={grommetTheme}>
    <Head>
      {<title>{pageTitle ?? ''}</title>}
      <link
        href="https://fonts.googleapis.com/css?family=Muli:400,700&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>

    <div
      className="grid gap-6 border-blue-400 border shadow-md p-8 m-8 h-full"
      {...props}
    >
      {children}
    </div>
  </Grommet>
);

export default MainLayout;
