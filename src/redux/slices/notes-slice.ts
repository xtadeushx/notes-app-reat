import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../../common/types/note.type";
import { NotesStatus } from "../../common/enums/notes-status";

export interface INotesInitialState {
  notesList: INote[]
}
const initialState: INotesInitialState = {
  notesList: [
    {
      id: 1,
      src: 'src/assets/shopping-cart.png',
      title: 'Shopping list',
      createdAt: 'April,20 2021',
      category: 'task',
      content: ['tomatoes', 'bread'],
      dates: [],
      status: 'active',
    },
    {
      id: 2,
      src: 'src/assets/thought.png',
      title: 'The theory of evolution',
      createdAt: 'April,27 2021',
      category: 'random thoughts',
      content: ['The theory of evolution'],
      dates: [],
      status: 'archived',
    },
    {
      id: 3,
      src: 'src/assets/lightbulb.png',
      title: 'New feature',
      createdAt: 'April,27 2021',
      category: 'idea',
      content: ['Implement new feature'],
      dates: ['3/5/2021', '5/5/2021'],
      status: 'archived',
    },

    {
      id: 4,
      src: 'src/assets/shopping-cart.png',
      title: 'Learning list',
      createdAt: 'April,21 2021',
      category: 'task',
      content: ['React', 'Redux'],
      dates: [],
      status: 'active',
    },
    {
      id: 5,
      src: 'src/assets/quote.png',
      title: 'Steve Jobs',
      createdAt: 'October,21 2019',
      category: 'quote',
      content: ['We are here to contribute to this world. Why else are we here?'],
      dates: [],
      status: 'archived',
    },

    {
      id: 6,
      src: 'src/assets/lightbulb.png',
      title: 'New feature',
      createdAt: 'June,27 2021',
      category: 'idea',
      content: ['Fix some bugs'],
      dates: [],
      status: 'active',
    },
    {
      id: 7,
      src: 'src/assets/quote.png',
      title: 'Albert Einstein',
      createdAt: 'January,14 2020',
      category: 'quote',
      content: [
        'The smarter a person is, the easier he recognizes himself as a fool.',
      ],
      dates: [],
      status: 'archived',
    },
  ]
}

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<INote>) => {
      state.notesList = [...state.notesList, action.payload];
    },

    deleteNote: (state, action: PayloadAction<number>) => {
      state.notesList = state.notesList.filter(note => note.id !== action.payload);
    },

    deleteAllNotes: (state) => { state.notesList = [] },

    changeNoteStatus: (state, action: PayloadAction<number>) => {
      state.notesList = state.notesList.map(note => {
        if (note.id === action.payload) {
          return { ...note, status: note.status === NotesStatus.ARCHIVED ? NotesStatus.ACTIVE : NotesStatus.ARCHIVED };
        } else {
          return note;
        }
      });
    }
  }
})

export const { addNote, deleteNote, deleteAllNotes, changeNoteStatus } = noteSlice.actions
export default noteSlice.reducer