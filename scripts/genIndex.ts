import { globby } from 'globby'
import fs from 'fs-extra'
import path from 'path'
import { consola } from 'consola'

const componentDirectory = path.join(__dirname, '../src/components')
const srcDirectory = path.join(__dirname, '../src')
const outputFile = path.join(srcDirectory, 'index.ts')
const defaultFile = path.join(srcDirectory, 'indexd.ts')

async function generateIndexFile() {
    try {
        // 使用globby获取组件文件夹中的所有.vue文件路径
        const files = await globby('**/*.vue', { cwd: componentDirectory })
        // 生成index.ts文件的内容
        const indexContent = files
            .map((file) => {
                const componentName = path.basename(file, '.vue')
                return `export { default as L${componentName} } from './components/${file}'`
            })
            .join('\n')

        const defaultExport = fs.readFileSync(defaultFile, 'utf-8')
        // 写入index.ts文件
        await fs.outputFile(
            outputFile,
            defaultExport + '\n' + indexContent + '\n'
        )

        consola.success(`Generated index.ts file at ${outputFile}`)
    } catch (error) {
        consola.error('Error generating index.ts file:', error)
    }
}

generateIndexFile()
