
import React from 'react';
import AnimatedToggle from '../components/AnimatedToggle';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme();

export default {
  title: 'Components/Animated Toggle',
  component: AnimatedToggle,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const Template = (args) => <AnimatedToggle {...args} />;

export const Default = Template.bind({});
Default.args = {};
