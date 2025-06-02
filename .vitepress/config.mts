import { defineConfig } from 'vitepress'
import { imageSizePlugin } from './plugins/image-size'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: 'https://img.makis-life.cn//images/20250602154403721.png' }]
  ],

  // 全局搜索配置
  themeConfig: {
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
    }
  },

  // Markdown 配置
  markdown: {
    config: (md) => {
      md.use(imageSizePlugin)
    }
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "Maki's Blog",
      description: "工作之余，学习之余。我的旅游见闻、生活心得、日常时刻。",
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '文章', link: '/articles/' },
          { text: '关于', link: '/about' }
        ],
        sidebar: [
          {
            text: '文章',
            items: [
              { text: '文章索引', link: '/articles/' },
              {
                text: '工具使用',
                items: [
                  { text: '使用 Rclone 挂载 OSS 到 Obsidian', link: '/articles/tools/mountOSSOBSwithRclone' },
                  { text: 'DeepSeek 插件在 Obsidian 中的使用', link: '/articles/tools/DeepSeekPluginsinObsidian' },
                  { text: '准备文件给 AI 处理', link: '/articles/tools/PrepareURFilestoAI' },
                  { text: '重置 Cursor 设置', link: '/articles/tools/resetCursor' },
                  { text: '输入法提示', link: '/articles/tools/ImTip' }
                ]
              },
              {
                text: '经验分享',
                items: [
                  { text: '3分钟部署静态网站', link: '/articles/experience/static-site-deploy-under-3' },
                  { text: '解决 MySQL 8.0 无法启动且无数据文件夹问题', link: '/articles/experience/solvingProb-cannLaunchMySQL80andNodataFolder' },
                  { text: '在 Ubuntu 中使用 Clash', link: '/articles/experience/UsingClashinUbuntu' }
                ]
              },
              {
                text: '思考随笔',
                items: [
                  { text: '系统分析师考试心得', link: '/articles/mind/system-analyst-exam-thoughts' },
                  { text: '为什么不改变方向', link: '/articles/mind/whynotChangeDirection' }
                ]
              }
            ]
          }
        ],
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
          { text: 'Articles', link: '/en/articles/' },
          { text: 'About', link: '/en/about' }
        ],
        sidebar: [
          {
            text: 'Articles',
            items: [
              { text: 'Articles Index', link: '/en/articles/' },
              {
                text: 'Tools',
                items: [
                  { text: 'Mount OSS to Obsidian with Rclone', link: '/en/articles/tools/mountOSSOBSwithRclone' },
                  { text: 'Using DeepSeek Plugin in Obsidian', link: '/en/articles/tools/DeepSeekPluginsinObsidian' },
                  { text: 'Prepare Files for AI Processing', link: '/en/articles/tools/PrepareURFilestoAI' },
                  { text: 'Reset Cursor Settings', link: '/en/articles/tools/resetCursor' },
                  { text: 'Input Method Tips', link: '/en/articles/tools/ImTip' }
                ]
              },
              {
                text: 'Experience',
                items: [
                  { text: 'Deploy Static Site in 3 Minutes', link: '/en/articles/experience/static-site-deploy-under-3' },
                  { text: 'Solving MySQL 8.0 Launch and Data Folder Issues', link: '/en/articles/experience/solvingProb-cannLaunchMySQL80andNodataFolder' },
                  { text: 'Using Clash in Ubuntu', link: '/en/articles/experience/UsingClashinUbuntu' }
                ]
              },
              {
                text: 'Thoughts',
                items: [
                  { text: 'System Analyst Exam Experience', link: '/en/articles/mind/system-analyst-exam-thoughts' },
                  { text: 'Why Not Change Direction', link: '/en/articles/mind/whynotChangeDirection' }
                ]
              }
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/MakiWinster72' }
        ]
      }
    }
  }
})
