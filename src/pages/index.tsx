import React from "react";
import { useRouter } from "next/router";
import MainLayout from "src/layouts/MainLayout";
import { withCss } from "src/lib/withCss";
import "src/styles/global.scss";
import css from "./index.module.scss";

const Page = () => {
  const router = useRouter();
  const query = router?.query ?? {};

  return (
    <MainLayout>
      <div className={css.header}>Howdy</div>
      {Object.keys(query).length ? JSON.stringify(query) : null}
    </MainLayout>
  );
};

export default withCss(Page, css => css``);
