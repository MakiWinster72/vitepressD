import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: 'https://img.makis-life.cn//images/20250602154403721.png' }]
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "Maki's Blog",
      description: "工作之余，学习之余。我的旅游见闻、生活心得、日常时刻。",
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: 'Markdown 示例', link: '/markdown-examples' },
          { text: 'Runtime API 示例', link: '/api-examples' }
        ],
        sidebar: [
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/markdown-examples' },
              { text: 'Runtime API 示例', link: '/api-examples' }
            ]
          }
        ],
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/MakiWinster72' }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: "Maki's Blog",
      description: "Maki's travel experiences, life insights, and daily moments from work and study.",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Markdown Examples', link: '/en/markdown-examples' },
          { text: 'Runtime API Examples', link: '/en/api-examples' }
        ],
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/en/markdown-examples' },
              { text: 'Runtime API Examples', link: '/en/api-examples' }
            ]
          }
        ],
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Search Docs',
                buttonAriaLabel: 'Search Docs'
              },
              modal: {
                noResultsText: 'No matching results found',
                resetButtonTitle: 'Clear query',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate',
                  closeText: 'Close'
                }
              }
            }
          }
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/MakiWinster72' }
        ]
      }
    }
  },

  themeConfig: {
    // 全局的导航和侧边栏作为 fallback (可选，如果每个语言都单独配置了可以移除)
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    // 全局搜索配置 (可选，如果每个语言都单独配置了可以移除)
    // search: {
    //   provider: 'local',
    //   options: {
    //     translations: { ... }
    //   }
    // },

    // 全局侧边栏 (可选，如果每个语言都单独配置了可以移除)
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // 全局社交链接 (可以保留全局，或在每个 locale 下单独配置)
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/MakiWinster72' }
    // ]

    // 默认主题的其他配置项，可以在 themeConfig 下为每个 locale 单独配置
    // 例如:
    // locales: {
    //   /:
    //     label: '简体中文'
    //     ...themeConfig for Chinese (default)
    //   /en/:
    //     label: 'English'
    //     ...themeConfig for English
    // }
  }
})
