module.exports = {
    title: 'Cʜᴀɴɢᴇ',
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
                text: '国家',
                items: [
                    {
                        text: '亚洲',
                        ariaLabel: '亚洲 Menu',
                        items: [
                            {text: '中国', link: 'https://www.baidu.com'},
                            {text: '日本', link: 'https://www.baidu.com'},
                            {text: '菲律宾', link: 'https://www.baidu.com'},
                            {text: '韩国', link: 'https://www.baidu.com'}
                        ]
                    },
                    {
                        text: '非洲',
                        items: [
                            {text: '中国', link: 'https://www.baidu.com'},
                            {text: '日本', link: 'https://www.baidu.com'},
                            {text: '菲律宾', link: 'https://www.baidu.com'},
                            {text: '韩国', link: 'https://www.baidu.com'}
                        ]
                    }
                ]
            }
        ],
    },
}