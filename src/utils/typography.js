import Typography from 'typography'

import theme from 'typography-theme-elk-glen'

theme.overrideThemeStyles = () => ({
  'a, a:visited': {
    backgroundImage: 'none'
  },
  'p a, p a:visited': {
    color: 'hotpink'
  },
  body: {
    backgroundColor: '#eee',
    margin: 0,
    padding: 0
  },
  '.wrapper': {
    width: 'calc(100% - 10vmin)',
    margin: '0 auto',
    padding: '5vmin 0'
  }
})

const typography = new Typography(theme)
// const { rhythm, scale } = typography
// export { rhythm, scale, typography as default };

export { typography as default }
