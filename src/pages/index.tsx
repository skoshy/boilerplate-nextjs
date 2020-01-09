import React from "react";
import MainLayout from "src/layouts/MainLayout";
import "src/styles/global.scss";
import { useRouter } from "src/lib";
import { Loading } from "src/components/_lib_";
import moduleCss from "./index.module.scss";
import styled from "styled-components";

const Page = () => {
  const { query, asPath } = useRouter();

  return (
    <MainLayout>
      <Loading /> <div className={moduleCss.header}>Howdy</div>
      {Object.keys(query).length ? JSON.stringify(query) : null}
      {asPath}
    </MainLayout>
  );
};

export default styled(Page)``;
