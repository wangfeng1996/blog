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
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        // 启用页面滚动效果
        smoothScroll: true,
        //最后更新时间,同时它将以合适的日期格式显示在每一页的底部
        lastUpdated: '最后更新时间',
        nav: [
            {text: '主页', link: '/'},
            {text: '指南', link: '/guide/'},
            {text: 'java技术', link: '/java/idea/'},
            {text: 'Go技术', link: '/go/'},
            {text: '前端技术', link: '/frontend/'},
            {
                text: '网络&网站',
                items: [
                    {
                        text: '自动部署项目',
                        link: '/website/自动化部署项目'
                    }
                ]
            },
            {text: '常用工具', link: '/tool/'},
            {text: '下载', link: '/download/'}
        ],
        sidebar: {
            '/java/idea/': [
                {
                    title: '生活测试',
                    collapsable: false,
                    children: [
                        {title: '生活测试01', path: '/java/idea/01'},
                        {title: '生活测试02', path: '/java/idea/02'},
                        {title: '生活测试03', path: '/java/idea/03'},
                        {title: '生活测试04', path: '/java/idea/自动化部署项目'},
                    ]
                }
            ]
        }
    }
}