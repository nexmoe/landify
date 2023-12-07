<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 px-2 md:px-16">
        <a
            v-for="item in data"
            :key="item"
            :href="item.url"
            class="py-8 overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
        >
            <div class="px-16">
                <div class="mt-1 mb-5 h-12 w-12 rounded-lg">
                    <img :src="item.logo" loading="lazy" />
                </div>
                <div
                    class="text-2xl font-bold tracking-tight text-black"
                    :style="{ color: item.color }"
                >
                    {{ item.title }}
                </div>
                <div
                    class="mt-3 text-lg leading-8 text-gray-500"
                    v-html="item.des"
                ></div>
            </div>
        </a>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
    {
        title: '小舒同学',
        logo: 'https://xiaoshuapp.com/icon.svg',
        color: '#df5d64',
        des: '以最轻松的方式使你的收藏夹变成强大的新标签页，让你重新聚焦真正重要的事情',
        slogan: '我们费尽心思折腾主页，<br />却从未好好整理过我们的收藏夹',
        url: '/'
    },
    {
        title: '漫游云野',
        logo: 'https://roam.mixcm.com/_nuxt/icons/icon_512x512.7b1967.png',
        color: '#f04e45',
        des: '轻松随意地与你朋友分享你的宝藏，发现互联网上的秘宝',
        slogan: '让你的收藏不再是孤岛',
        url: 'https://roam.mixcm.com'
    },
    {
        title: '探索者小舒',
        logo: 'https://xiaoshuapp.com/explorer/icon.svg',
        color: '#665cd5',
        des: '以最轻松快捷的方式在侧栏切换搜索',
        slogan: '专业的操作不需要那么痛苦',
        url: '/explorer/'
    },
    {
        title: 'Meteor New Tab',
        logo: 'https://xiaoshuapp.com/meteor/icon.svg',
        color: '#60a0e0',
        des: '让你的收藏夹在标签页上简洁明了',
        slogan: '专业的操作不需要那么痛苦',
        url: '/meteor/'
    }
])
</script>
