import React from 'react';
import styles from './form.module.scss';
import Select from '../common/select/select';
import { Button } from '../common/button/button';
import { Input } from '../common/input/input';
import { useState } from '../../hooks/hooks';
import { useDispatch } from 'react-redux';

const SELECT__OPTIONS = [
  { id: 1, value: 'task', text: 'Task' },
  { id: 2, value: 'random thoughts', text: 'Random Thoughts' },
  { id: 3, value: 'idea', text: 'Idea' },
  { id: 4, value: 'quote', text: 'Quote' },
];

interface IFormProps {
  mode: 'edit' | 'create'
}
type Values = {
  name: string,
  category: string,
  content: string,
  date: string,

}
const Form: React.FC<IFormProps> = ({ mode }) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState<Values>({
    name: "",
    category: "",
    content: "",
    date: ""
  });
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(values)
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <Input
        type="text"
        value={values.name}
        onChange={handleChange}
        name="name"
        required
        minLength={5}
        placeholder="Note name"
        text="Name"

      />
      <Select
        title="Category"
        optionList={SELECT__OPTIONS}
        name="category"
        value={values.category}
        onChange={handleChange} />
      <Input
        type="text"
        value={values.content}
        onChange={handleChange}
        name="content"
        required
        minLength={5}
        placeholder="Note content"
        text="Content"
      />
      {mode === "create" ?
        <Input
          type="date"
          value={values.date}
          onChange={handleChange}
          name="date"
          required
          placeholder="Note content"
          text="Dates"
        /> :
        null}
      <Button type="submit" className={styles.add__note}>
        {mode === "create" ? 'Add note' : 'Edit note'}
      </Button>
    </form>
  );
};

export { Form };
