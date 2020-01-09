import React from 'react';
import MainLayout from 'src/layouts/MainLayout';
import 'src/styles/global.scss';
import { useRouter } from 'src/lib';
import { Loading } from 'src/components/_lib_';
import moduleCss from './index.module.scss';
import styled from 'styled-components';
import { Box, Heading } from 'grommet';

const Page = () => {
  const { query, asPath } = useRouter();

  return (
    <MainLayout>
      <Loading />
      <Box className={moduleCss.header}>Howdy</Box>
      <Heading className={moduleCss.header}>Hi</Heading>
      {Object.keys(query).length ? JSON.stringify(query) : null}
      {asPath}
    </MainLayout>
  );
};

export default styled(Page)``;
