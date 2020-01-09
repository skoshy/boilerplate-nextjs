import React from "react";
import styled from "styled-components";

interface Props {
  children?: any;
  className?: string;
}

const UnstyledMainLayout = ({ children, className = "" }: Props) => (
  <div
    css={`
      border: 1px solid black;
    `}
    className={`layout main ${className}`}
  >
    {children}
  </div>
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
