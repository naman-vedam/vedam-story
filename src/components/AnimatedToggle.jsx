import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const AnimatedToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  position: 'relative',
  border: `${theme.spacing(0.25)} solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',

  '& .MuiToggleButtonGroup-grouped': {
    border: 'none',
    borderRadius: 0,
    margin: 0,
    backgroundColor: 'transparent',
    transition: theme.transitions.create(['transform'], {
  duration: theme.transitions.duration.standard,
  easing: theme.transitions.easing.easeInOut,
}),
    position: 'relative',
    zIndex: 2,
    minWidth: theme.spacing(12.5),
    padding: theme.spacing(1.5, 3),
    fontWeight: 500,
    color: theme.palette.primary.main,

    '&:hover': {
      transform: 'scale(1.02)',
    },
    '&.Mui-selected': {
      backgroundColor: 'transparent !important',
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: 'transparent !important',
      },
    },
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '50%',
    backgroundColor: theme.palette.primary.main,
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
    transition: theme.transitions.create(['transform'], {
        duration: 500,
        easing: theme.transitions.easing.easeInOut,
      }),
    zIndex: 1,
    boxShadow: theme.shadows[4],
  },

  '&[data-selected="android"]::before': {
    transform: 'translateX(100%)',
  },
}));

const AnimatedToggleButton = styled(ToggleButton)(({ theme }) => ({
  '&:not(.Mui-selected)': {
    color: theme.palette.primary.main,
  },
  '& .MuiTouchRipple-root': {
    display: 'none',
  },
}));

export default function App() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="grey.100"
    >
      <Box textAlign="center" px={2}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          color="text.primary"
          fontWeight={300}
          sx={{ mb: 4 }}
        >
          Animated Toggle Button
        </Typography>

        <AnimatedToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          data-selected={alignment}
        >
          <AnimatedToggleButton value="web">WEB</AnimatedToggleButton>
          <AnimatedToggleButton value="android">ANDROID</AnimatedToggleButton>
        </AnimatedToggleButtonGroup>
      </Box>
    </Box>
  );
}
