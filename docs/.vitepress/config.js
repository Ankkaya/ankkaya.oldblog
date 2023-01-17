/**
 * @type { import('vitepress').UserConfig }
 */

const config = {
  title: 'Ankkaya',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      {
        text: '首页',
        link: '/index'
      },
      {
        text: '书籍',
        link: '/books/'
      }, {
        text: '其他',
        link: '/other/'
      }, {
        text: '联系我',
        link: '/contact'
      }
    ],
    sidebar: {
      '/books/': [
        {
          text: '',
          items: [
            {
              text: '蛤蟆先生去看心理医生',
              link: '/books/#蛤蟆先生去看心理医生'
            }, {
              text: '只管去做',
              link: '/books/#只管去做'
            }
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Ankkaya'
    }
  }
}
export default config