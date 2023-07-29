import { NotesCategories } from "../enums/notes-categories";

export interface INote {
  id: number,
  src: string,
  title: string,
  createdAt: Date,
  category: NotesCategories,
  content: string[],
  dates: string[],
  status: 'active' | 'archived',
}

