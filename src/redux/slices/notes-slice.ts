import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INote, TStatus } from '../../common/types/note.type';
import { NotesStatus } from '../../common/enums/notes-status';
import { DATA } from '../../model/data';

export interface INotesInitialState {
  notesList: INote[];
}
const initialState: INotesInitialState = {
  notesList: DATA,
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<INote>) => {
      state.notesList = [...state.notesList, action.payload];
    },

    deleteNote: (state, action: PayloadAction<string>) => {
      state.notesList = state.notesList.filter(
        (note) => note.id !== action.payload
      );
    },

    deleteAllNotes: (state) => {
      state.notesList = [];
    },

    changeNoteStatus: (state, action: PayloadAction<string>) => {
      state.notesList = state.notesList.map((note) => {
        if (note.id === action.payload) {
          return {
            ...note,
            status:
              note.status === NotesStatus.ARCHIVED
                ? NotesStatus.ACTIVE
                : NotesStatus.ARCHIVED,
          };
        } else {
          return note;
        }
      });
    },

    changeAllNotesStatus: (state, action: PayloadAction<TStatus>) => {
      state.notesList = state.notesList.map((note) => {
        return { ...note, status: action.payload };
      });
    },

    editNote: (
      state,
      action: PayloadAction<{ id: string; newNote: INote }>
    ) => {
      state.notesList = state.notesList.map((el) =>
        el.id === action.payload.id ? action.payload.newNote : el
      );
    },
  },
});

export const {
  addNote,
  deleteNote,
  deleteAllNotes,
  changeNoteStatus,
  changeAllNotesStatus,
  editNote,
} = noteSlice.actions;
export default noteSlice.reducer;
