<script setup lang="ts">
import { Footer, Comment, Section } from './src'
import data from './data.json'
</script>

<template>
    <Section color="gray">
        <template #title>用户评价</template>
        <template #des
            >网络世界万物互联，轻松链接到任何地方、使用任何设备访问。让你不仅能启动哔哩哔哩，更能直达感兴趣的视频
        </template>
        <Comment :comments="data.comments" />
    </Section>
    <Footer :pages="data.footer.pages">
        <template #left>
            Copyright © {{ new Date().getFullYear() }}
            <a href="https://i.nexmoe.com/" target="_blank">Nexmoe</a>.
        </template>
        <template #right>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow"
                >琼ICP备2022008031号-2</a
            >
        </template>
    </Footer>
</template>
