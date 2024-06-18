import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs',
			social: {
				github: 'https://github.com/homelabwithkevin/docs.homelabwithkevin.com',
			},
			sidebar: [
				{
					label: 'Intro',
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Welcome',
							link: '/intro'
						},
					],
				},
				{
					label: 'Costs',
					autogenerate: { directory: 'costs' }
				},
				{
					label: 'Basics',
					autogenerate: { directory: 'basics' }
				}, 
			],
		}),
	],
});
