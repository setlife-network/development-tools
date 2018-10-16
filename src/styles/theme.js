export default {
    // styled-system breakpoints
    breakpoints: ['600px', '900px', '1200px', '1800px'],
    // breakpoints for media.js
    devices: {
        mobile: 599,
        tabletPortrait: 600,
        tabletLandscape: 900,
        desktop: 1200,
        desktopBig: 1800
    },
    // Borders
    borderRadius: '3px',
    borderWidth: '1px',
    // Box shadows (used in Card component)
    shadows: {
        1: '0px 1.5px 8px rgba(0,0,0,0.07)',
        2: '0px 2px 11px rgba(0,0,0,0.10)',
        3: '0px 3px 16px rgba(0,0,0,0.12)',
        4: '0px 4px 21px rgba(0,0,0,0.14)',
        5: '0px 5px 25px rgba(0,0,0,0.14)',
    },
    // Colors (styled-system)
    colors: {
        white: '#ffffff',
        background: '#F7F7F9',
        border: '#EEEFF2',
        lightGrey: '#CFD5DE',
        grey: '#718093',
        charcoal: '#344768',
        purple: '#C15BEE',
        blue: '#00B2FF',
        green: '#02BE57',
        yellow: '#F4D163',
        red: '#CF242B',
        facebook: '#32529F',
        overlay: 'rgba(0,0,0,0.5)',
        transparent: 'transparent'
    },
    gradients: {
        vertical: `linear-gradient(#4481EB, #04BEFE)`,
        horizontal: `linear-gradient(90deg, #4481EB, #04BEFE)`,
    },
    // Fonts (styled-system)
    fonts: {
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
            fontWeight: 700,
        },
        h2: {
            fontSize: '3rem',
            fontWeight: 700,
        },
        h3: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        h4: {
            fontSize: '2rem',
            fontWeight: 700,
        },
        h5: {
            fontSize: '1.75rem',
            fontWeight: 700,
        },
        h6: {
            fontSize: '1.5rem',
            fontWeight: 700,
        }
    },
    // tags for styled-components `as` polymorphic prop
    tags: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        display1: 'h1',
        display2: 'h2',
        display3: 'h3',
        display4: 'h4',
    },
    // Spacing (styled-system)
    space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
    // Transitions
    durationShort: '200ms',
    durationLong: '450ms',
    transitionOpacity: {
        entering: 1,
        entered: 1,
        exiting: 0,
        exited: 0
    },
    // Z Index
    zIndexModal: 999,
    zIndexModalBackdrop: 1000,
}