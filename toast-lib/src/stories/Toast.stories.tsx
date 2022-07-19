import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toast from '../components/Toast/Toast';

export default {
  title: 'Example/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;
const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Warning = Template.bind({});

Warning.args = {
  type: 'warning',
  text: 'zabr',
};

export const Info = Template.bind({});

Info.args = {
  type: 'info',
  text: 'zabr',
};

export const Success = Template.bind({});

Success.args = {
  type: 'success',
  text: 'zabr',
};

export const Error = Template.bind({});

Error.args = {
  type: 'error',
  text: 'zabr',
};
