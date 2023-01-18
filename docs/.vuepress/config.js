module.exports = {
    title: 'Andrew',
    description: '描述',
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: '/logo.png',
        },
      ],
    ],
    themeConfig: {
      logo: '/logo.png',
      lastUpdated: '最后更新时间',
      sidebar: 'auto',
      nav: [
        {
          text: '首页',
          link: '/',
        },
        {
          text: '分类',
          items: [
            {
              text: '文章',
              link: '/pages/article.md',
            },
            {
              text: '笔记',
              link: '/pages/note.md',
            },
          ],
        },
        {
          text: '关于',
          link: '/pages/about.md',
        },
        {
          text: '百度',
          link: 'https://www.baidu.com/',
        },
      ],
    },
  }