import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Landify',
    description:
        'Presentational Components for Landing Page, mainly build for VitePress. Help you quickly build a landing page.',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' }
            //   { text: 'Examples', link: '/markdown-examples' }
        ],

        // sidebar: [
        //   {
        //     text: 'Examples',
        //     items: [
        //       { text: 'Markdown Examples', link: '/markdown-examples' },
        //       { text: 'Runtime API Examples', link: '/api-examples' }
        //     ]
        //   }
        // ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/nexmoe/landify' }
        ]
    }
})
