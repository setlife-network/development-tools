// Base rem sizing

export const baseRemMobile = 10
export const baseRemDesktop = 8

// Breakpoints for media queries

export const breakpoints = {
    sm: 320,
    md: 768,
    lg: 960,
    xl: 1600
}

// Borders

export const borderRadius = '3px'
export const borderWidth = '1px'

// Box shadows

export const shadow1 = '0px 1.5px 8px rgba(0,0,0,0.07)'
export const shadow2 = '0px 2px 11px rgba(0,0,0,0.10)'
export const shadow3 = '0px 3px 16px rgba(0,0,0,0.12)'
export const shadow4 = '0px 4px 21px rgba(0,0,0,0.14)'
export const shadow5 = '0px 5px 25px rgba(0,0,0,0.14)'

// Colors

export const white = '#ffffff'
export const background = '#F7F7F9'
export const border = '#EEEFF2'
export const lightGrey = '#CFD5DE'
export const grey = '#718093'
export const darkGrey = '#344768'
export const purple = '#C15BEE'
export const blue = '#00B2FF'
export const green = '#02BE57'
export const yellow = '#F4D163'
export const red = '#CF242B'
export const facebook = '#32529F'
export const overlay = 'rgba(0,0,0,0.5)'

export const colors = {
    white,
    background,
    border,
    lightGrey,
    grey,
    darkGrey,
    purple,
    blue,
    green,
    yellow,
    red,
    facebook,
    overlay
}

// Fonts

export const fontWeights = {
    regular: 400,
    bold: 700
}

export const fonts = {
    h1: {
        size: '3.75rem',
        weight: fontWeights.bold,
        tag: 'h1'
    },
    h2: {
        size: '3rem',
        weight: fontWeights.bold,
        tag: 'h2'
    },
    h3: {
        size: '2.5rem',
        weight: fontWeights.bold,
        tag: 'h3'
    },
    h4: {
        size: '2rem',
        weight: fontWeights.bold,
        tag: 'h4'
    },
    h5: {
        size: '1.75rem',
        weight: fontWeights.bold,
        tag: 'h5'
    },
    h6: {
        size: '1.5rem',
        weight: fontWeights.bold,
        tag: 'h6'
    },
    display1: {
        size: '12rem',
        weight: fontWeights.regular,
        tag: 'h1'
    },
    display2: {
        size: '11rem',
        weight: fontWeights.regular,
        tag: 'h2'
    },
    display3: {
        size: '9rem',
        weight: fontWeights.regular,
        tag: 'h3'
    },
    display4: {
        size: '7rem',
        weight: fontWeights.regular,
        tag: 'h4'
    }
}

// Grid

export const gridMargin = 2
export const gridSize = 12
export const gridWidth = {
    sm: 100,
    md: 90,
    lg: 80,
    xl: 70
}

export const gutterWidth = 2

// Transitions

export const durationShort = 200
export const durationLong = 450
export const transitionOpacity = {
    entering: 1,
    entered: 1,
    exiting: 0,
    exited: 0
}

// Z Index

export const zIndexModal = 999
export const zIndexModalBackdrop = 1000