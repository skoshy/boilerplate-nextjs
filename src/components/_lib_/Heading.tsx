import styled from 'styled-components';
import { Text } from 'src/components/_lib_';

const H = {
  1: styled.h1`text-6xl leading-tight`,
  2: styled.h2`text-5xl leading-tight`,
  3: styled.h3`text-4xl`,
  4: styled.h4`text-3xl`,
  5: styled.h5`text-2xl`,
  6: styled.h6`text-xl`,
};


export const Heading = styled(({ level = '1', ...props }) => {
  const Component = H[level];

  return <Component {...props} />;
})`

`;
