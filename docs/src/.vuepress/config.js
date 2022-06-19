const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'The Missing Strapi Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', {id: "scriptImporter"}, `
          var callback = function () {
      alert('A callback was triggered');
  };
        `]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    sidebar: {
      '/guide/': [
        {
          title: 'Plugin Guide',
          collapsable: false,
          children: [
            '',
            ['plugin-guides/create-plugin', 'Creating A Plugin'],
            ['plugin-guides/plugin-structure', 'Plugin Structure & Meaning'],
            ['plugin-guides/storing-data', 'CRUDing Data'],
            ['plugin-guides/middleware', 'Global Plugin Middlewares'],
            ['plugin-guides/passing-data', 'Pass Data From Server to Admin'],
            ['plugin-guides/publish-plugin', 'Publishing Your Plugin'],
            ['plugin-guides/impossible', 'What you can\'t do with a plugin']
          ]
        },
        {
          title: "Diagrams",
          collapsable: false,
          children:[
              ['diagrams/lifecycle', "Lifecycle"]
          ]
        },
        {
          title: "Utils",
          collapsable: false,
          children:[
            ['utils/helpful-cli', "Helpful CLI Commands"]
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      'mermaidjs',
      {
        securityLevel: 'loose'
      }
    ],
    ['vuepress-plugin-code-copy', true],
    'vuepress-plugin-smooth-scroll'
  ]
}
