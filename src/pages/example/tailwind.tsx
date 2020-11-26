import 'twin.macro';
import { useState } from "react";
import MainLayout from "src/layouts/MainLayout";
import { cc } from "src/lib";
import { Modal, Button, Grid, Heading, Select, TextInput } from "src/components/_lib_";
import { signUp } from 'src/api';

/* Use this as your starting point for your app! */

const pageTitle = "Tailwind Example";

const Page = ({ className }) => {
  const [userName, setUserName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <MainLayout
      pageTitle={pageTitle}
      className={cc([`bg-black bg-white bg-black`, className])}
    >
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <div>This is a modal</div>
      </Modal>
      <Grid tw="gap-6 grid-cols-2">
        <Heading level="1">Howdy doody partner</Heading>
        <p>Partner</p>
        <Button href="http://google.com">button</Button>
        <Button onClick={() => setIsModalOpen(true)}>show modal</Button>
        <Button onClick={async () => {
          const { id, email } = await signUp(userName, 'password');
          console.log(id, email);
        }}>signup</Button>
        <TextInput value={userName} onChange={e => setUserName(e.target.value)} label="username" footer={"text"} />
        <TextInput label="&shy;" footer="&shy;" />
        <Select />
        <TextInput />
      </Grid>
    </MainLayout>
  );
};

export default Page;
