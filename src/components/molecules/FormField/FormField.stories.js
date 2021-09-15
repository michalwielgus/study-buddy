import FormField from './FormField';

const Story = {
  title: 'Components/Molecules/FormField',
  component: FormField,
};

export default Story;

const Template = (args) => <FormField name="story" id="story" {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Search',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  label: 'Lorem ipsum dolor mit amet. Login Form',
};
