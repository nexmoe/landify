<script setup lang="ts">
import { Footer, Comment, Section } from './src'
import data from './data.json'
</script>

<template>
    <Section color="gray">
        <template #title>用户评价</template>
        <template #des>Test</template>
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
