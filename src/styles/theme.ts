const theme = {
  colors: {
    bg1: '#FAFBFC',
    bg2: '#F3F3F3',
    bg3: '#F7F7F8',
    bg4: '#DCDCDF',
    text1: '#91929E',
    text2: '#1C1C1C',
    text3: '#5C5C5C',
    text4: '#B0B7C3',
    text5: '#FF1733',
    button: '#5C5C5C',
    shadow: '#C4CBD6',
    black: '#000000',
    white: '#FFFFFF',
    border: '#C4C4C4',
  },
  font: {
    family: {
      default: 'DM Sans',
      user: 'Roboto',
      pagination: 'Inter',
    },
    size: {
      xs: '11px',
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '20px',
    },
    weight: {
      normal: 'normal',
      medium: '500',
      bold: 'bold',
    },
  },
};

export type Color = keyof typeof theme.colors;
export type FontFamily = keyof typeof theme.font.family;
export type FontSize = keyof typeof theme.font.size;
export type FontWeight = keyof typeof theme.font.weight;

export default theme;
