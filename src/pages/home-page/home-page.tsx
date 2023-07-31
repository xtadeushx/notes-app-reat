import { CreateMode } from '../../common/enums/create-mode';
import { TDevelopMode } from '../../common/types/note.type';
import { Modal } from '../../components/common/modal/modal';
import { Form } from '../../components/form/form';
import { NotesTable } from '../../components/notes-table/notes-table';

import styles from './home-page.module.scss';
import { useState } from 'react';

const HomePage: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [mode, setMode] = useState<TDevelopMode>(CreateMode.CREATE);
  const [currentId, setCurrentId] = useState<number | null>(null);

  const handelOpen = () => setOpen((prev) => !prev);
  const handelMode = (currentMode: TDevelopMode) => setMode(currentMode);
  const handelId = (id: number) => {
    if (!currentId) return
    setCurrentId(id)
  };
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <NotesTable handelOpen={handelOpen} handelMode={handelMode} handelId={handelId} />
        </div>
      </main>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={handelOpen}
      >
        <Form mode={mode} handelOpen={handelOpen} currentId={currentId} />
      </Modal>
    </>
  );
};

export { HomePage };
