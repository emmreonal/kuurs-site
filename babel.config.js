const path = require('path')

module.exports = {
  plugins: [
    [
      'auto-import',
      {
        declarations: [
          {
            default: 'classNames',
            path: 'classnames'
          },
          {
            default: 'Col',
            path: path.resolve(__dirname, 'src/components/Col.jsx')
          },
          {
            default: 'Icon',
            path: path.resolve(__dirname, 'src/components/Icon.jsx')
          },
          {
            default: 'IconButton',
            path: path.resolve(__dirname, 'src/components/IconButton.jsx')
          },
          {
            default: 'Row',
            path: path.resolve(__dirname, 'src/components/Row.jsx')
          },
          {
            default: 'Sidebar',
            path: path.resolve(__dirname, 'src/components/Sidebar.jsx')
          },
          {
            default: 'render',
            path: 'preact-render-to-string'
          },
          {
            default: 'express',
            path: 'express'
          },
          {
            default: 'Home',
            path: path.resolve(__dirname, 'src/pages/Home.jsx')
          }
        ]
      }
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
        importSource: 'preact'
      }
    ]
  ]
}
