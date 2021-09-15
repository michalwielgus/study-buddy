import Button from './Button';

const Story = {
  title: 'Components/Atoms/Button',
  component: Button,
};

export default Story;

const Template = (args) => <Button {...args}>Read more</Button>;

export const Default = Template.bind({});
export const Big = Template.bind({});
Big.args = {
  isBig: true,
};
export const Absolute = Template.bind({});
Absolute.args = {
  isAbsolute: true,
};
