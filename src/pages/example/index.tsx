import React from 'react';
import styled from 'styled-components';
import { Heading, Text, Anchor } from 'grommet';
import MainLayout from 'src/layouts/MainLayout';
import { SITE_NAME } from 'src/constants';

const pageTitle = SITE_NAME;

const Page = () => {
  console.log('hi');
  return (
    <MainLayout pageTitle={pageTitle} gap="small">
      <Heading>Hi there</Heading>
      <Text>
        This is a boilerplate made by{' '}
        <Anchor href="https://github.com/skoshy/">@skoshy</Anchor>
      </Text>
      <Heading level={2}>Why tho?</Heading>
      <Text>
        Using this is a great starting point to any web app you&apos;d like to
        build.
      </Text>
      <Text>Modify it to your heart&apos;s content</Text>
    </MainLayout>
  );
};

export default styled(Page)``;
