import { primitives } from './primitives';

export const darkColors = {

  background: {
    primary: primitives.neutral[950],
    secondary: primitives.neutral[800],
    tertiary: primitives.neutral[700],
    quaternary: primitives.neutral[600]
  },

  text: {
    primary: primitives.neutral[0],
    secondary: primitives.neutral[300],
    tertiary: primitives.neutral[400],
    quaternary: primitives.neutral[500],
    disabled: primitives.neutral[600],
    success: primitives.green[400],
    critical: primitives.red[400],
    warning: primitives.yellow[400],
    info: primitives.blue[500],
    brand: primitives.brand[500],
  },

  border: {
    default: primitives.neutral[800],
    error: primitives.red[400],
    emphasize: primitives.neutral[700],
    strong: primitives.neutral[0]
  },

  icon: {
    primary: primitives.neutral[0],
    secondary: primitives.neutral[300],
    tertiary: primitives.neutral[400],
    quaternary: primitives.neutral[600],
    disabled: primitives.neutral[700],
    success: primitives.green[400],
    critical: primitives.red[400],
    warning: primitives.yellow[400],
    info: primitives.blue[500],
    brand: primitives.brand[500],
  },

  brand: {
    primary: primitives.brand[600]
  },

  transparent: {
    T50: 'rgba(255, 255, 255, 0.05)',      
    T100: 'rgba(255, 255, 255, 0.10)', 
    T150: 'rgba(255, 255, 255, 0.15)', 
    T200: 'rgba(255, 255, 255, 0.20)', 
    T250: 'rgba(255, 255, 255, 0.25)', 
    T300: 'rgba(255, 255, 255, 0.30)', 
    T350: 'rgba(255, 255, 255, 0.35)', 
    T400: 'rgba(255, 255, 255, 0.40)', 
    T450: 'rgba(255, 255, 255, 0.45)', 
    T500: 'rgba(255, 255, 255, 0.50)', 
    T550: 'rgba(255, 255, 255, 0.55)', 
    T600: 'rgba(255, 255, 255, 0.60)', 
    T650: 'rgba(255, 255, 255, 0.65)', 
    T700: 'rgba(255, 255, 255, 0.70)', 
    T750: 'rgba(255, 255, 255, 0.75)', 
    T800: 'rgba(255, 255, 255, 0.80)', 
    T850: 'rgba(255, 255, 255, 0.85)', 
    T900: 'rgba(255, 255, 255, 0.90)', 
    T950: 'rgba(255, 255, 255, 0.95)', 
  },
};