import { INote } from "../common/types/note.type";

const DATA: INote[] = [
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
];

export { DATA };
