import { Modal } from '../../components/common/modal/modal';
import { Form } from '../../components/form/form';
import { NotesTable } from '../../components/notes-table/notes-table';

import styles from './home-page.module.scss';
import { useState } from 'react';

const HomePage: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const handelOpen = () => setOpen((prev) => !prev);
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <NotesTable handelOpen={handelOpen} />
        </div>
      </main>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={() => setOpen((prev) => !prev)}
      >
        <Form />
      </Modal>
    </>
  );
};

export { HomePage };
