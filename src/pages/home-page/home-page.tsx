import { Modal } from '../../components/common/modal/modal';
import { NotesTable } from '../../components/notes-table/notes-table';

import styles from './home-page.module.scss';

const HomePage: React.FC = () => {
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <NotesTable />
        </div>
      </main>
      <Modal isCentered isOpen={true} onClose={() => console.log('modal close')}
      >
        <form action="#" className="form" id="form">
          <label className="label">
            Name
            <input type="text" name="title" placeholder="Note name" className="input" value="" id="inputName" required
              minLength={5} />
          </label>

          <select id="select" className="select" name="category">
            <option value="task" selected>Task</option>
            <option value="random thoughts">Random Thoughts</option>
            <option value="idea">Idea</option>
            <option value="quote">Quote</option>
          </select>
          <label className="label">
            Content
            <input type="text" name="content" placeholder="Note content" className="input" value="" id="inputContent" required
              minLength={5} />
          </label>
          <label className="label" id="dateLabel">
            Dates
            <input type="date" name="date" className="input" id="inputDate" value="" />
          </label>
          <button type="submit" className="add-note__button" id="add-note__button">add note</button>
        </form>
      </Modal >
    </>

  )
}

export { HomePage }