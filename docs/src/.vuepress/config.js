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
            ['plugin-guides/middleware', 'Middlewares'],
            ['plugin-guides/passing-data', 'Pass Data From Server to Admin']
          ]
        },
        {
          title: "Diagrams",
          collapsable: false,
          children:[
              ['diagrams/lifecycle', "Lifecycle"]
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
    ]
  ]
}
