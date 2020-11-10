import React from "react";
import MainLayout from "src/layouts/MainLayout";
import { cc } from "src/lib";

/* Use this as your starting point for your app! */

const pageTitle = "Tailwind Example";

const Page = ({ className }) => {
  return (
    <MainLayout
      pageTitle={pageTitle}
      className={cc([`bg-black bg-white bg-black`, className])}
    >
      <div className="grid gap-6 grid-cols-2 text-sm">
        <p>Howdy</p>
        <p>Partner</p>
      </div>
    </MainLayout>
  );
};

export default Page;
