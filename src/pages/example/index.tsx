import React from 'react';
import styled from 'styled-components';
import { Box, Heading, Text } from 'grommet';
import MainLayout from 'src/layouts/MainLayout';
import { Loading } from 'src/components/_lib_';
import { SITE_NAME } from 'src/constants';

const pageTitle = SITE_NAME;

const Page = () => {
  return (
    <MainLayout pageTitle={pageTitle}>
      <Loading />
      <Box gap="small">
        <Heading>Hi there</Heading>
        <Text>
          This is a boilerplate made by{' '}
          <a href="https://github.com/skoshy/">@skoshy</a>
        </Text>
      </Box>
    </MainLayout>
  );
};

export default styled(Page)``;
