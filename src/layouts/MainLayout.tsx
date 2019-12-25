import React from "react";
import { withCss } from "src/lib/withCss";

const MainLayout = ({ children, className }) => (
  <div className={`layout main ${className}`}>{children}</div>
);

export default withCss(MainLayout, css => css``);
