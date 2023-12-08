// uno.config.ts
import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
    content: {
        filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}']
    },
    presets: [presetWind()]
})
