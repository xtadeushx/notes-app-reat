import { TSelectorList } from '../../trip/components/constants/type';

export type TSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  dataTestId: string;
  children: React.ReactNode;
  optionList: TSelectorList[];
  value: string;
  onchange: any;
};
