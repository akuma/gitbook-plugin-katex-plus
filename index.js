const katex = require('katex')

module.exports = {
  book: {
    assets: './static',
    js: [],
    css: [
      'katex.min.css'
    ]
  },
  ebook: {
    assets: './static',
    css: [
      'katex.min.css'
    ]
  },
  blocks: {
    math: { // Double dollar signs ($) for math blocks (centered)
      shortcuts: {
        parsers: ['markdown', 'asciidoc', 'restructuredtext'],
        start: '$$',
        end: '$$'
      },
      process(block) {
        const tex = block.body
        console.log('block', block)
        const output = katex.renderToString(tex, {
          displayMode: true
        })
        return output
      }
    },
    math_inline: { // Single dollar sign for inline math
      shortcuts: {
        parsers: ['markdown', 'asciidoc', 'restructuredtext'],
        start: '$',
        end: '$'
      },
      process(block) {
        const tex = block.body
        const output = katex.renderToString(tex, {
          displayMode: false
        })
        return output
      }
    }
  }
}
