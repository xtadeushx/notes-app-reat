
export interface INote {
  id: number,
  src: string,
  title: string,
  createdAt: string,
  category: string,
  content: string[],
  dates: string[],
  status: TStatus,
}

export type TStatus = 'active' | 'archived'

export type TDevelopMode = 'create' | 'edit'