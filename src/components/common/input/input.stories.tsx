import { Story, Meta } from '@storybook/react';
import '../../../index.css';
import { Input } from "./input";
import { TInputProps } from './types';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<TInputProps> = (args: TInputProps) => <Input {...args} />;

// Basic Input
export const Text_Input = Template.bind({});
Text_Input.args = {
  text: 'Input',
  placeholder: 'placeholder',
  onChange: () => alert('Input changed'),
  className: 'w-full py-1 px-2 my-2 mx-0 bg-white max-width-[200px] placeholder:opacity-40',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Input',
  placeholder: 'placeholder',
  disabled: true,
  className: 'w-full py-1 px-2 my-2 mx-0 bg-white max-width-[200px] placeholder:opacity-40',
};