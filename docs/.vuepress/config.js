const moment = require('moment');
module.exports = {
    title: 'Cʜᴀɴɢᴇ',
    description: '描述',
    head: [
        ['link', { rel: 'icon', href: '/logo/logo.png' }]
    ],
    plugins: {
        // 网页内容有更新的时候有刷新按钮。可以把网页保存到桌面，当一个app一样
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "有新的内容更新",
                buttonText: "刷新"
            }
        },
        '@vuepress/back-to-top': true,
        '@vuepress/last-updated': {
            transformer: (timestamp, lang) => {
                // 不要忘了安装 moment
                const moment = require('moment')
                moment.locale(lang)
                return moment(timestamp).format("YYYY-MM-DD")
            }
        }
    },
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        //假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/wangfeng1996/blog',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'https://github.com/wangfeng1996/blogs',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        // 启用页面滚动效果
        smoothScroll: true,
        //最后更新时间,同时它将以合适的日期格式显示在每一页的底部
        lastUpdated: '最后更新时间',
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            {
                text: 'java技术', items: [
                    {
                        text: 'mysql',
                        link: '/java/mysql/01-mysql'
                    },
                    {
                        text: 'spring',
                        link: '/java/spring/01-spring'
                    }
                ]
            },
            { text: 'Go技术', link: '/go/' },
            { text: '前端技术', link: '/frontend/' },
            {
                text: '网络&网站',
                items: [
                    {
                        text: '项目部署',
                        link: '/website/自动化部署项目'
                    }
                ]
            },
            {
                text: '常用工具',
                items: [
                    {
                        text: 'IDEA',
                        link: '/tools/idea/01-IDEA'
                    }
                ]
            },
            { text: '下载', link: '/download/' }
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
            '/java/mysql': [
                {
                    title: 'mysql',
                    sidebarDepth: 5,
                    // 可折叠的
                    collapsable: false,
                    children: [
                        { title: 'mysql介绍', path: '01-mysql' }
                    ]
                },
            ],
            '/java/spring': [
                {
                    title: 'Spring',
                    sidebarDepth: 5,
                    // 可折叠的
                    collapsable: false,
                    children: [
                        { title: 'Spring介绍', path: '01-spring' }
                    ]
                }
            ],
            '/tools/idea/': [
                {
                    title: 'IDEA',
                    sidebarDepth: 5,
                    // 可折叠的
                    collapsable: false,
                    children: [
                        { title: 'idea介绍', path: '01-IDEA' },
                        { title: 'idea设置', path: '02-快捷键设置' },
                        { title: 'idea常用的快捷键（windows）', path: '03-常用快捷键-Windows' },
                        { title: 'idea常用的快捷键（macos）', path: '04-常用快捷键-Mac' },
                        { title: '常用插件', path: '05-常用插件' },
                        { title: 'Git配置', path: '06-Git配置' },
                        { title: 'JDK配置', path: '07-JDK配置' },
                        { title: 'Maven配置', path: '08-Maven配置' },
                        { title: 'Gradle配置', path: '09-Gradle配置' },
                        { title: 'java新运行项目模板配置', path: '10-java新运行项目模板配置' },
                        { title: '开发规范', path: '11-开发规范' },
                        { title: '编码设置', path: '12-编码设置' },
                        { title: '自动导入', path: '13-自动导入' },
                        { title: '代码自动编译', path: '14-代码自动编译' },
                        { title: '代码模板', path: '15-代码模板' },
                        { title: '自动添加注释', path: '16-自动添加注释' },
                        { title: '控制台中文乱码', path: '17-控制台中文乱码' },
                        { title: '导入导出配置', path: '18-导入导出配置' },
                        { title: '解决卡顿闪退', path: '19-解决卡顿闪退' },
                        { title: '双击没反应', path: '20-双击没反应' },
                        { title: '使用反代理工具激活JRebel', path: '21-使用反代理工具激活JRebel' },
                        { title: 'Error和Warning提示颜色修改', path: '22-Error和Warning提示颜色修改' },
                        { title: '设置不索引node_moudles目录', path: '23-设置不索引node_moudles目录' },
                        { title: 'DEBUG调试', path: '24-DEBUG调试' },
                        { title: 'debug跳过class文件', path: '25-debug跳过class文件' },
                        { title: '解决重启之后记不住git密码问题', path: '26-解决重启之后记不住git密码问题' },

                    ]
                }
            ],
            '/website/': [
                {
                    title: '项目部署',
                    sidebarDepth: 5,
                    collapsable: true,
                    children: [{ title: '自动化部署项目', path: '自动化部署项目' }]
                }

            ],
        }
    }
}
