import 'twin.macro';
import React from "react";
import MainLayout from "src/layouts/MainLayout";
import { cc } from "src/lib";
import { Grid, Heading, Select, Text, TextInput } from "src/components/_lib_";

/* Use this as your starting point for your app! */

const pageTitle = "Tailwind Example";

const Page = ({ className }) => {
  return (
    <MainLayout
      pageTitle={pageTitle}
      className={cc([`bg-black bg-white bg-black`, className])}
    >
      <Grid tw="gap-6 grid-cols-2">
        <Heading level="1">Howdy doody partner</Heading>
        <p>Partner</p>
        <TextInput label="hi" footer={"text"} />
        <TextInput label="&shy;" footer="&shy;" />
        <Select />
        <TextInput />
      </Grid>
    </MainLayout>
  );
};

export default Page;
