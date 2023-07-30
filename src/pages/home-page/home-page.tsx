import { Modal } from '../../components/common/modal/modal';
import { Form } from '../../components/form/form';
import { NotesTable } from '../../components/notes-table/notes-table';

import styles from './home-page.module.scss';
import { useState } from 'react';

const HomePage: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [mode, setMode] = useState<'edit' | 'create'>('create');
  const handelOpen = () => setOpen((prev) => !prev);
  const handelMode = (currentMode: 'edit' | 'create') => setMode(currentMode);
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <NotesTable handelOpen={handelOpen} handelMode={handelMode} />
        </div>
      </main>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={handelOpen}
      >
        <Form mode={mode} handelOpen={handelOpen} />
      </Modal>
    </>
  );
};

export { HomePage };
