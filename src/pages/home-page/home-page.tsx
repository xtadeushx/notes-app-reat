import {
  TITLE_LIST,
  TITLE_LIST_SUMMARy,
} from '../../common/constants/constants';
import { CreateMode } from '../../common/enums/create-mode';
import { TDevelopMode } from '../../common/types/note.type';
import { Button } from '../../components/common/button/button';
import { Modal } from '../../components/common/modal/modal';
import { Form } from '../../components/form/form';
import { TableHeader } from '../../components/notes-table/components/table-header/table-header';
import { TableList } from '../../components/notes-table/components/table-list/table-list';
import { TableSummaryList } from '../../components/notes-table/components/table-summary/table-summary-list/table-summary-list';
import { NotesTable } from '../../components/notes-table/notes-table';
import { useState } from '../../hooks/hooks';


const HomePage: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [mode, setMode] = useState<TDevelopMode>(CreateMode.CREATE);
  const [currentId, setCurrentId] = useState<string>('1');

  const handelOpen = () => setOpen((prev) => !prev);
  const handelMode = (currentMode: TDevelopMode) => setMode(currentMode);
  const handelId = (id: string) => {
    if (!currentId) return;
    setCurrentId(id);
  };
  return (
    <>
      <main className='w-full flex justify-center self-start items-start'>
        <div className="container">
          <NotesTable isSummaryTable={false}>
            <>
              <TableHeader titleList={TITLE_LIST} withButtons classList='grid-cols-6' />
              <TableList
                handelMode={handelMode}
                handelOpen={handelOpen}
                handelId={handelId}
              />
            </>
          </NotesTable>
          <Button
            type="button"
            className='p-2 cursor-pointer justify-end mt-3 mb-10 border-2 border-solid border-gray-500 w-[100px] rounded-[5px] text-color-gray-500'
            onClick={() => {
              handelOpen();
              handelMode(CreateMode.CREATE);
            }}
          >
            Create note
          </Button>
          <NotesTable isSummaryTable={true}>
            <>
              <TableHeader titleList={TITLE_LIST_SUMMARy} withButtons={false} classList='grid-cols-3' />
              <TableSummaryList />
            </>
          </NotesTable>
        </div>
      </main>
      <Modal isCentered isOpen={isOpen} onClose={handelOpen}>
        <Form mode={mode} handelOpen={handelOpen} currentId={currentId} />
      </Modal>
    </>
  );
};

export { HomePage };
