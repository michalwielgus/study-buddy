import Modal from './Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

const Story = {
  title: 'Components/Molecules/Modal',
  component: Modal,
};

export default Story;

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails student={args.student} />
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  student: {
    id: '1',
    name: 'Michał Mięculewicz-Wielgus',
    attendance: '39%',
    average: '4.3',
    group: 'A',
    subjects: [
      {
        name: 'Math',
        grade: 3.5,
      },
      {
        name: 'Economy',
        grade: 4.5,
      },
      {
        name: 'English',
        grade: 2.5,
      },
    ],
  },
};
