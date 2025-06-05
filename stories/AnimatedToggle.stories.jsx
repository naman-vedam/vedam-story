// src/stories/AnimatedToggle.stories.jsx
import React from 'react';
import AnimatedToggle from '../components/AnimatedToggle';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a simple MUI theme. Storybook often already injects one via a decorator,
// but including this here ensures that if you don’t have a global MUI decorator,
// the toggle still picks up spacing/colors/shadows correctly.
const theme = createTheme();

export default {
  title: 'Components/Animated Toggle',
  component: AnimatedToggle,
  // If you have a global MUI decorator in .storybook/preview.js, you can omit this decorator block.
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

// “Playground” story (no args needed—component manages its own state)
const Template = (args) => <AnimatedToggle {...args} />;

export const Default = Template.bind({});
Default.args = {};
