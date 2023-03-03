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
            {text: 'java技术', link: '/java/'},
            {text: 'Go技术', link: '/go/'},
            {text: '前端技术', link: '/frontend/'},
            {
                text: '网络&网站',
                items: [
                    {
                        text: '项目部署',
                        link: '/website/'
                    }
                ]
            },
            {
                text: '常用工具',
                items: [
                    {
                        text: 'IDEA',
                        link: '/tools/idea/'
                    }
                ]
            },
            {text: '下载', link: '/download/'}
        ],
        sidebar: {
            '/download/': [
                ''
            ],
            '/frontend/': [
                ''
            ],
            '/go/': [
                ''
            ],
            '/guide/': [
                ''
            ],
            '/java/': [
            ],
            '/tools/idea/': [
                {
                    title: 'IDEA',
                    sidebarDepth: 5,
                    collapsable: true,
                    children: [
                        {title: 'idea介绍', path: '01-IDEA'},
                        {title: 'idea设置', path: '02-快捷键设置'},
                        {title: 'idea常用的快捷键（windows）', path: '03-常用快捷键-Windows'},
                        {title: 'idea常用的快捷键（macos）', path: '04-常用快捷键-Mac'},
                        {title: '常用插件', path: '05-常用插件'},
                        {title: 'Git配置', path: '06-Git配置'},
                        {title: 'JDK配置', path: '07-JDK配置'},
                        {title: 'Maven配置', path: '08-Maven配置'},
                        {title: 'Gradle配置', path: '09-Gradle配置'},
                        {title: 'java新运行项目模板配置', path: '10-java新运行项目模板配置'},
                        {title: '开发规范', path: '11-开发规范'},
                        {title: '编码设置', path: '12-编码设置'},
                        {title: '自动导入', path: '13-自动导入'},
                        {title: '代码自动编译', path: '14-代码自动编译'},
                        {title: '代码模板', path: '15-代码模板'},
                        {title: '自动添加注释', path: '16-自动添加注释'},
                        {title: '控制台中文乱码', path: '17-控制台中文乱码'},
                        {title: '导入导出配置', path: '18-导入导出配置'},
                        {title: '解决卡顿闪退', path: '19-解决卡顿闪退'},
                        {title: '双击没反应', path: '20-双击没反应'},
                        {title: '使用反代理工具激活JRebel', path: '21-使用反代理工具激活JRebel'},
                        {title: 'Error和Warning提示颜色修改', path: '22-Error和Warning提示颜色修改'},
                        {title: '设置不索引node_moudles目录', path: '23-设置不索引node_moudles目录'},
                        {title: 'DEBUG调试', path: '24-DEBUG调试'},
                        {title: 'debug跳过class文件', path: '25-debug跳过class文件'},
                        {title: '解决重启之后记不住git密码问题', path: '26-解决重启之后记不住git密码问题'},

                    ]
                }
            ],
            '/website/': [
                {
                    title:'项目部署',
                    sidebarDepth: 5,
                    collapsable: true,
                    children:[{title: '自动化部署项目', path: '自动化部署项目'}]
                }

            ],
        }
    }
}
