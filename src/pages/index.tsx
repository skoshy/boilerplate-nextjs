import React from 'react';
import styled from 'styled-components';
import { Box, Heading } from 'grommet';
import MainLayout from 'src/layouts/MainLayout';
import 'src/styles/global.scss';
import { useRouter } from 'src/lib';
import { Loading } from 'src/components/_lib_';

const pageTitle = 'Howdy';

const Page = () => {
  const { query, asPath } = useRouter();

  return (
    <MainLayout pageTitle={pageTitle}>
      <Loading />
      <Box>Howdy</Box>
      <Heading>Hi</Heading>
      {Object.keys(query).length ? JSON.stringify(query) : null}
      {asPath}
    </MainLayout>
  );
};

export default styled(Page)``;
