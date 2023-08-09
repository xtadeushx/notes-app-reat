import { Story, Meta } from '@storybook/react';
import '../../../index.css';
import { Button } from './button';
import { Image } from '../image/image';
import { TButtonProps } from './types';
import editingIcon from '../../../assets/archive.png';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const image = {
  src: editingIcon,
  alt: 'my image',
};

const Template: Story<TButtonProps> = (args: TButtonProps) => <Button {...args} />;
// Basic Button
export const Basic = Template.bind({});
Basic.args = {
  children: <Image alt={image.alt} src={image.src} width={30} />,
  onClick: () => alert('Button clicked'),
  className: 'w-[50px] cursor-pointer  bg-transparent hover:scale-110 object-contain',
};

export const BasicLight = Template.bind({});
BasicLight.args = {
  children: <Image alt={image.alt} src={image.src} width={30} />,
  onClick: () => alert('Button clicked'),
  className: 'w-[50px] cursor-pointer  bg-transparent hover:scale-110 object-contain button--light',
};

export const Variants = Template.bind({});
Variants.args = {
  children: 'Variants',
  onClick: () => alert('Button clicked'),
  type: 'button',
  className: 'p-2 cursor-pointer justify-end mt-3 mb-10 border-2 border-solid border-gray-500 w-[100px] rounded-[5px] text-color-gray-500',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  onClick: () => alert('Button clicked'),
  disabled: true,
  className: 'p-2 cursor-default justify-end mt-3 mb-10 border-2 border-solid border-white w-[100px] rounded-[5px] text-white hover:scale-100 object-contain',
};


