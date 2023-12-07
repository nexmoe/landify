import { defineBuildConfig } from 'unbuild'
import Unocss from '@unocss/postcss'

export default defineBuildConfig({
    entries: [
        { builder: 'mkdist', input: './src/' },
        // @ts-expect-error: See https://github.com/unjs/unbuild/issues/332
        { builder: 'mkdist', input: './src/', format: 'cjs', ext: 'cjs' }
    ],
    clean: true,
    declaration: true,
    sourcemap: true,
    externals: ['vue'],
    hooks: {
        'mkdist:entry:options': (a, b, options) => {
            options.postcss = {
                ...options.postcss,
                plugins: [Unocss()]
            }
        }
    }
})
