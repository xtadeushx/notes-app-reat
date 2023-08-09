import { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import { Button } from './button';
import { Image } from '../image/image';
import editingIcon from '../../../assets/archive.png';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const image = {
  src: editingIcon,
  alt: 'my image',
};

export const Icon_Only_Button: Story = {
  args: {
    children: <Image alt={image.alt} src={image.src} width={30} />,
    onClick: () => alert('Button clicked'),
    className: 'w-[50px] cursor-pointer  bg-transparent hover:scale-110 object-contain',
  },
};


export const Icon_Only_Button_Disabled: Story = {
  args: {
    children: <Image alt={image.alt} src={image.src} width={30} />,
    onClick: () => alert('Button clicked'),
    className: 'w-[50px] cursor-pointer  bg-transparent hover:scale-110 object-contain button--light',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    onClick: () => alert('Button clicked'),
    disabled: true,
    className: 'p-2 cursor-default justify-end mt-3 mb-10 border-2 border-solid border-white w-[100px] rounded-[5px] text-white hover:scale-100 object-contain',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary',
    onClick: () => alert('Button clicked'),
    disabled: true,
    className: 'p-2 cursor-pointer justify-end mt-3 mb-10 border-2 border-solid border-gray-500 w-[100px] rounded-[5px] text-color-gray-500',
  },
};




