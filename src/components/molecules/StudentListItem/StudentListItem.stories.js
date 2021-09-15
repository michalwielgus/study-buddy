import StudentListItem from './StudentListItem';

const Story = {
  title: 'Components/Molecules/StudentListItem',
  component: StudentListItem,
};

export default Story;

const Template = (args) => <StudentListItem {...args} />;

export const BadGrades = Template.bind({});
BadGrades.args = {
  userData: {
    name: 'Michał Mięculewicz-Wielgus',
    attendance: '90%',
    average: '2',
  },
};

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  userData: {
    name: 'Michał Mięculewicz-Wielgus',
    attendance: '90%',
    average: '3.5',
  },
};

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  userData: {
    name: 'Michał Mięculewicz-Wielgus',
    attendance: '90%',
    average: '4.5',
  },
};

export const NoGrades = Template.bind({});
NoGrades.args = {
  userData: {
    name: 'Michał Mięculewicz-Wielgus',
    attendance: '90%',
    average: null,
  },
};
