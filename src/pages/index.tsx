import React from "react";
import MainLayout from "src/layouts/MainLayout";
import { withCss } from "src/lib/withCss";
import "src/styles/global.scss";
import css from "./index.module.scss";

const Page = () => (
  <MainLayout>
    <div className={css.header}>Howdy</div>
  </MainLayout>
);

export default withCss(Page, css => css``);
