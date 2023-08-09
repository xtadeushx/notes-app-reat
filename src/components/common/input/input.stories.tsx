import { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;



// Basic Input
export const Primary: Story = {
  args: {
    text: 'Input',
    placeholder: 'placeholder',
    onChange: () => alert('Input changed'),
    className: 'w-full py-1 px-2 my-2 mx-0 bg-white max-width-[200px] placeholder:opacity-40',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Input',
    placeholder: 'placeholder',
    disabled: true,
    className: 'w-full py-1 px-2 my-2 mx-0 bg-white max-width-[200px] placeholder:opacity-40',
  },
};

