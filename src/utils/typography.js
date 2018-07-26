import Typography from 'typography'

const typography = new Typography({
  headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Avenir Next', 'Arial', 'sans-serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'p a, p a:visited, li > a, li > a:visited': {
      color: 'hotpink'
    }
  })
})
// const { rhythm, scale } = typography
// export { rhythm, scale, typography as default };

export { typography as default }
