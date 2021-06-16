export let searchResult = [
    {
        id: 1,
        title: '百度一下，你就知道',
        href: 'https://www.baidu.com',
        desc: '百度百度百度百度百度百度',
        icon: 'https://www.baidu.com/favicon.testerror',
        tags: [
            'chrome', 'dev', 'html', 'css', 'js', 'baidu'
        ]
    },
    {
        id: 2,
        title: 'Google',
        href: 'https://www.google.com',
        desc: 'gooooooooooooogle',
        icon: 'https://www.google.com/favicon.ico',
        tags: [
            'chrome', 'dev', 'html', 'css', 'google', 'js'
        ]
    },
    {
        id: 3,
        title: 'Github,Github,Github,Github,Github',
        href: 'https://github.com',
        desc: 'GithubGithubGithubGithub',
        icon: 'https://github.com/favicon.ico',
        tags: [
            'chrome', 'dev', 'html', 'css', 'github', 'js'
        ]
    },
    {
        id: 4,
        title: '存储 API - Google Chrome 应用开发文档',
        href: 'https://crxdoc-zh.appspot.com/apps/app_storage',
        desc: 'Google Chrome 应用开发文档',
        icon: 'https://crxdoc-zh.appspot.com/favicon.ico',
        tags: [
            'chrome', 'dev', 'html', 'css', 'api', 'js'
        ]
    },
    {
        id: 5,
        title: '掘金 - 代码不止，掘金不停',
        href: 'https://juejin.cn',
        desc: '代码不止，掘金不停',
        icon: 'https://juejin.cn/favicon.ico',
        tags: [
            'chrome', 'dev', 'html', 'css', 'juejin', 'js'
        ]
    },
    {
        id: 6,
        title: 'OSCHINA - 中文开源技术交流社区',
        href: 'https://www.oschina.net',
        desc: '中文开源技术交流社区',
        icon: 'https://www.oschina.net/favicon.ico',
        tags: [
            'chrome', 'dev', 'html', 'css', 'oschina', 'js'
        ]
    },
];

export let tagsArr = [
    'Docker', 'C++', 'Java', 'JavaScript',
    '数据结构', 'chrome', 'Shell', 'html', '仓库',
    'TypeScript', 'Webpack', 'React', 'Vue', 'jest',
    'css', '知乎', '掘金', 'dev', 'js', 'baidu', 'google',
    'github', 'api', 'juejin', 'oschina'
]

const tags = [
    {
        text: 'Foo',
        description: 'aaa',
        color: 'blue',
    },
    {
        text: 'Bar',
        color: 'red',
    },
    {
        text: 'a',
        color: 'red',
    }, {
        text: 'b',
        color: 'red',
    }, {
        text: 'c',
        color: 'red',
    }, {
        text: 'd',
        color: 'red',
    }, {
        text: 'e',
        color: 'red',
    },
]

export async function fetchAllTags() {
    return new Promise(res => {
        res(tags);
    })
}

export async function storeTag(tag) {
    return new Promise((res) => {
        setTimeout(() => {
            tags.push(tag);
            res();
        }, 100)
    })
}
