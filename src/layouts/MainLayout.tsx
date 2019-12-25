import React from "react";
import { withCss } from "src/lib/withCss";

const MainLayout = ({ children, className }) => (
  <div className={`layout main ${className}`}>{children}</div>
);

export default withCss(
  MainLayout,
  css => css`
    & {
      border: 1px solid #eee;
      box-shadow: 0px 0px 10px #ddd;
      padding: 2rem;
      margin-top: 2rem;
      margin-left: 2rem;
      margin-right: 2rem;
      height: 100%;
    }
  `
);
