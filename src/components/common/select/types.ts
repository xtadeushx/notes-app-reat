export type TSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  optionList: ISelectOption[];
  value?: string;
  onchange?: () => void;
  title: string;
};

interface ISelectOption {
  id: number;
  value: string;
  text: string;
}
