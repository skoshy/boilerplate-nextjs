import React from 'react';
import Head from 'next/head';
import { Grommet, Box } from 'grommet';
import styled from 'styled-components';
import { grommetTheme } from 'src/styles';
import { SITE_NAME } from 'src/constants';
import 'src/styles/global.scss';

interface Props {
  pageTitle?: string;
  children?: any;
  className?: string;
  [key: string]: any;
}

const UnstyledMainLayout = ({
  pageTitle = SITE_NAME,
  children,
  className = '',
  ...props
}: Props) => (
  <Grommet theme={grommetTheme}>
    <Head>
      {<title>{pageTitle ?? ''}</title>}
      <link
        href="https://fonts.googleapis.com/css?family=Muli:400,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Box gap="medium" className={`layout main-layout ${className}`} {...props}>
      {children}
    </Box>
  </Grommet>
);

export default styled(UnstyledMainLayout)`
  background: yellow;
  border: 1px solid #eee;
  box-shadow: 0px 0px 10px #ddd;
  padding: 2rem;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  height: 100%;
`;
