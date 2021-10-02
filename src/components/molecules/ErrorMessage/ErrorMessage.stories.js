import ErrorMessage from './ErrorMessage';
import styled from 'styled-components';

const StoryWrapper = styled.div`
  width: 100%;
  height: 96vh;
  overflow-y: hidden;
  position: relative;
`;

const Story = {
  title: 'Components/Molecules/ErrorMessage',
  component: ErrorMessage,
};

export default Story;

const Template = (args) => (
  <StoryWrapper>
    <ErrorMessage {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  message: 'Something went wrong. Please try again, or contact out support.',
};
