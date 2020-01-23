import React from 'react';
import MainLayout from 'src/layouts/MainLayout';

/* Use this as your starting point for your app! */

const pageTitle = 'Tailwind Example';

const Page = ({ className }) => {
  return (
    <MainLayout pageTitle={pageTitle} align="center" className={className}>
      <div className="grid gap-6 grid-cols-2">
        <p>Howdy</p>
        <p>Partner</p>
      </div>
    </MainLayout>
  );
};

export default Page;
