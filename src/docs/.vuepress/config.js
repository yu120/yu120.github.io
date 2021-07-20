module.exports = {
	title: '你好， VuePress ！',
	description: '这是我的第一个 VuePress 站点',
	base: '/',
	themeConfig: {
		sidebarDepth: 3,
		logo: './images/logo.png',
		lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
		displayAllHeaders: true, // 默认值：false
		activeHeaderLinks: false, // 默认值：true
		nav: [
			{ text: '首页', link: '/' },
			{ text: '指南', link: '/guide/' },
			{ text: 'GitHub', link: 'https://github.com/yu120' },
		],
		sidebar: [
		  {
			title: 'Group 1',
			collapsable: false,
			children: [
			  '/guide/'
			]
		  },
		  {
			title: 'Group 2',
			collapsable: false,
			children: [
			  '/guide/JAVA'
			]
		  }
		]
	}
}