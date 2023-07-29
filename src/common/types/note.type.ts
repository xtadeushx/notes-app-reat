
export interface INote {
  id: number,
  src: string,
  title: string,
  createdAt: string,
  category: string,
  content: string[],
  dates: string[],
  status: 'active' | 'archived',
}

