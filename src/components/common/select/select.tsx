import { TSelectProps } from './types';

const Select = ({
  name,
  title,
  optionList = [],
  value,
  onchange,
  ...rest
}: TSelectProps) => {
  return (
    <label className={'w-full'}>
      {title}
      <select
        value={value}
        name={name}
        onChange={onchange}
        {...rest}
        className={'w-full py-1 px-10 my-10 mx-0'}
      >
        {optionList.map((el) => {
          return (
            <option key={el.id} value={el.value}>
              {el.text}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Select;
