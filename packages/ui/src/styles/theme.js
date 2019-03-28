export default {
  // styled-system breakpoints
  breakpoints: {
    d: 0,
    xs: '400px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1800px'
  },
  // Box shadows
  shadows: {
    1: '0px 1.5px 8px rgba(0,0,0,0.07)',
    2: '0px 2px 11px rgba(0,0,0,0.10)',
    3: '0px 3px 16px rgba(0,0,0,0.12)',
    4: '0px 4px 21px rgba(0,0,0,0.14)',
    5: '0px 5px 25px rgba(0,0,0,0.14)'
  },
  // Colors (styled-system)
  colors: {
    white: '#ffffff',
    background: '#F7F7F9',
    border: '#EEEFF2',
    lightGrey: '#CFD5DE',
    grey: '#718093',
    darkGrey: '#344768',
    purple: '#C15BEE',
    blue: '#00B2FF',
    green: '#02BE57',
    yellow: '#F4D163',
    red: '#CF242B',
    facebook: '#32529F',
    twitter: '#38A1F3',
    overlay: 'rgba(0,0,0,0.5)'
  },
  // Fonts
  fonts: 'Open Sans, sans-serif',
  fontWeights: {
    normal: 400,
    bold: 600
  },
  fontVariants: {
    caps: {
      textTransform: 'uppercase'
    },
    h1: {
      fontSize: '3.4em',
      fontWeight: 600
    },
    h2: {
      fontSize: '3em',
      fontWeight: 600
    },
    h3: {
      fontSize: '2.4em',
      fontWeight: 600
    },
    h4: {
      fontSize: '2em',
      fontWeight: 600
    },
    h5: {
      fontSize: '1.8em',
      fontWeight: 600
    },
    h6: {
      fontSize: '1.6em',
      fontWeight: 600
    }
  },
  // Spacing scale
  space: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
};
