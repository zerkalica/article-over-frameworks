import baseTheme from '@mdx-deck/themes'
import {default as syntax} from 'react-syntax-highlighter/dist/esm/styles/prism/prism'

const Provider = ({children, slides, index}) => (
  <div>
    {children}
    <div
      css={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        margin: '16px',
      }}
    >
      {index + 1} / {slides.length}
    </div>
  </div>
)

export default {
  ...baseTheme,
  Provider,
  prism: {
    style: {
        ...syntax,
        "code[class*=\"language-\"]": {
            ...syntax["code[class*=\"language-\"]"],
            'lineHeight': 1.1,
        },
        "pre[class*=\"language-\"]": {
            ...syntax["pre[class*=\"language-\"]"],
            'lineHeight': 1.1,
            margin: 0,
            padding: '0.5rem 1rem',
        }
    },
  },
  css: {
    ...baseTheme.css,
    '@media screen and (min-width:64em)': {
        'pre': {
            fontSize: '32px',
        },
        table: {
          fontSize: '42px',
        }
    },
    table: {
      borderCollapse: 'collapse',
    },
    'tr:nth-child(2n)': {
      background: '#eee',
    },
    th: {
      padding: '0.5rem',
      border: '1px solid #999',
    },
    td: {
      padding: '0.5rem',
      border: '1px solid #999',
    },
  },

  ul: {
      marginTop: 0,
  },

  h1: {
    margin: '0.2em 0',
  },
  h2: {
      margin: '0.4em 0',
  },
  h3: {
    margin: '0.4em 0',
  },
  h4: {
    margin: '0.3em 0',
  },
  p: {
    margin: '0.2em 0',
  },
  a: {
    textDecoration: 'none',
  },
}
