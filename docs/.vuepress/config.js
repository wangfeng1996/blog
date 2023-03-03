module.exports = {
    title: 'Cʜᴀɴɢᴇ',
    description: '描述',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "有新的内容更新",
                buttonText: "刷新"
            }
        }
    },
    themeConfig: {
        // 启用页面滚动效果
        smoothScroll: true,
        //最后更新时间,同时它将以合适的日期格式显示在每一页的底部
        lastUpdated: 'Last Updated',
        nav: [
            {text: 'java', link: '/java/'},
            {text: 'idea', link: '/idea/'},
            {text: '其他', link: '/other/'}
        ],
        sidebar: {
            '/idea/': [
                {
                    title: 'IDEA',
                    collapsable: false,
                    children: [
                        {title: '生活测试01', path: '/idea/01'},
                        {title: '生活测试02', path: '/idea/02'},
                        {title: '生活测试03', path: '/idea/03'},
                    ]
                }
            ]
        }
    }
}