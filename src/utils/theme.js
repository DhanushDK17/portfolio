import { createTheme } from '@mui/material/styles';

const lightPalette = {
  primary: {
    main: '#004D40',  // Dark Green
  },
  secondary: {
    main: '#F1F8E9',  // Off-White
  },
  accent: {
    main: '#FFD700',  // Gold
  },
  background: {
    default: '#F1F8E9',  // Off-White
    paper: '#FFFFFF',  // White
  },
  text: {
    primary: '#3E2723',  // Charcoal
  },
};

const darkPalette = {
  mode: 'dark',  // Use dark mode
  primary: {
    main: '#004D40',  // Dark Teal
  },
  secondary: {
    main: '#3E2723',  // Charcoal
  },
  accent: {
    main: '#FFD700',  // Gold
  },
  background: {
    default: '#121212',  // Dark Gray
    paper: '#1E1E1E',  // Darker Gray
  },
  text: {
    // primary: '#E0E0E0',  // Light Gray
    primary: 'red',  // Light Gray
  },
};

const typography = (palette) => ({
  fontFamily: 'Roboto, sans-serif',
  h1: {
    color: palette.text.primary,  // Use text primary color
  },
  h2: {
    color: palette.text.primary,  // Use text primary color
  },
  h3: {
    color: palette.text.primary,  // Use text primary color
  },
  h4: {
    color: palette.text.primary,  // Use text primary color
  },
  h5: {
    color: palette.text.primary,  // Use text primary color
  },
  h6: {
    color: palette.text.primary,  // Use text primary color
  },
  body1: {
    color: palette.text.primary,  // Use text primary color
  },
  body2: {
    color: palette.text.primary,  // Use text primary color
  },
  subtitle1: {
    color: palette.text.primary,  // Use text primary color
  },
  subtitle2: {
    color: palette.text.primary,  // Use text primary color
  },
  caption: {
    color: palette.text.primary,  // Use text primary color
  },
  overline: {
    color: palette.text.primary,  // Use text primary color
  },
  button: {
    color: palette.text.primary,  // Use text primary color
  },
});

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        borderRadius: 8,
      },
      containedPrimary: {
        backgroundColor: '#004D40',
        color: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#00332C',
        },
      },
      containedSecondary: {
        backgroundColor: '#FFD700',
        color: '#3E2723',
        '&:hover': {
          backgroundColor: '#CCAC00',
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: '#004D40',
        color: '#FFFFFF',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundColor: 'background.paper',  // Will use paper background from the palette
        color: 'text.primary',  // Will use primary text color from the palette
      },
    },
  },
};

const lightTheme = createTheme({
  palette: typography(lightPalette),
  typography,
  components,
});

const darkTheme = createTheme({
  palette: typography(darkPalette),
  typography,
  components,
});

export { lightTheme, darkTheme };
