/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'Publicodes',
	tagline: "Le langage pour les algorithmes d'intérêt public",
	url: 'https://publi.codes',
	baseUrl: '/',
	onBrokenLinks: 'warn', // TODO: use 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'betagouv',
	projectName: 'publicodes',
	themeConfig: {
		navbar: {
			title: 'Publicodes',
			// logo: {
			// 	alt: 'My Site Logo',
			// 	src: 'img/logo.svg',
			// },
			items: [
				{
					type: 'doc',
					docId: 'se-lancer',
					position: 'left',
					label: 'Documentation',
				},
				{
					to: 'communaute',
					position: 'left',
					label: 'Communauté',
				},
				{
					to: 'studio',
					position: 'left',
					label: 'Bac à sable',
				},
				{
					href: 'https://gitter.im/publicodes/community',
					label: 'Chat',
					position: 'right',
				},
				{
					href: 'https://github.com/betagouv/publicodes',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		// footer: {
		// 	style: 'dark',
		// 	links: [
		// 		{
		// 			title: 'Docs',
		// 			items: [
		// 				{
		// 					label: 'Tutorial',
		// 					to: '/docs/intro',
		// 				},
		// 			],
		// 		},
		// 		{
		// 			title: 'Community',
		// 			items: [
		// 				{
		// 					label: 'Stack Overflow',
		// 					href: 'https://stackoverflow.com/questions/tagged/docusaurus',
		// 				},
		// 				{
		// 					label: 'Discord',
		// 					href: 'https://discordapp.com/invite/docusaurus',
		// 				},
		// 				{
		// 					label: 'Twitter',
		// 					href: 'https://twitter.com/docusaurus',
		// 				},
		// 			],
		// 		},
		// 		{
		// 			title: 'More',
		// 			items: [
		// 				{
		// 					label: 'Blog',
		// 					to: '/blog',
		// 				},
		// 				{
		// 					label: 'GitHub',
		// 					href: 'https://github.com/facebook/docusaurus',
		// 				},
		// 			],
		// 		},
		// 	],
		// 	copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		// },
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/edit/master/website/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/edit/master/website/blog/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
}
