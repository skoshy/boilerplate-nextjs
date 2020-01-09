import React from 'react';
import { Grommet, Box } from 'grommet';
import styled from 'styled-components';
import { grommetTheme } from 'src/styles';

interface Props {
  children?: any;
  className?: string;
}

const UnstyledMainLayout = ({ children, className = '' }: Props) => (
  <Grommet theme={grommetTheme}>
    <Box gap="medium" className={`layout main ${className}`}>
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
