const colors = {
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
}

export default {
    // 1 rem equals...
    baseRem: 8,
    // styled-system breakpoints
    breakpoints: ['600px', '900px', '1200px', '1800px'],
    // Box shadows
    shadows: {
        1: '0px 1.5px 8px rgba(0,0,0,0.07)',
        2: '0px 2px 11px rgba(0,0,0,0.10)',
        3: '0px 3px 16px rgba(0,0,0,0.12)',
        4: '0px 4px 21px rgba(0,0,0,0.14)',
        5: '0px 5px 25px rgba(0,0,0,0.14)',
    },
    // Colors (styled-system)
    colors: {
        ...colors,
        primary: colors.blue
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
        display1: {
            fontSize: '12rem',
            fontWeight: 400,
        },
        display2: {
            fontSize: '11rem',
            fontWeight: 400,
        },
        display3: {
            fontSize: '9rem',
            fontWeight: 400,
        },
        display4: {
            fontSize: '7rem',
            fontWeight: 400,
        },
        h1: {
            fontSize: '3.75rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '3rem',
            fontWeight: 600,
        },
        h3: {
            fontSize: '2.5rem',
            fontWeight: 600,
        },
        h4: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h5: {
            fontSize: '1.75rem',
            fontWeight: 600,
        },
        h6: {
            fontSize: '1.5rem',
            fontWeight: 600,
        }
    },
    // Component theming
    Modal: {
        maxWidth: '90%',
        borderRadius: '4px',
        padding: '2rem'
    }
}