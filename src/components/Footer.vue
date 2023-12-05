<template>
    <div class="footer border-t border-gray-200 pt-16">
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
        <div class="nexmoe-container">
            <div
                class="flex flex-row flex-wrap justify-center md:justify-between"
            >
                <div v-for="item in links" :key="item" class="flex-auto col">
                    <h3>{{ item.title }}</h3>
                    <a
                        v-for="child in item.children"
                        :key="child"
                        :href="child.url"
                        class="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        >{{ child.title }}</a
                    >
                </div>
                <div class="justify-self-center md:justify-self-end">
                    <img
                        class="w-24 md:-mb-16"
                        src="https://xiaoshu.s3.bitiful.net/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230717210001.jpg?fmt=webp"
                    />
                </div>
            </div>
        </div>

        <div class="nexmoe-container">
            <div class="copyright">
                <div class="page">
                    <a
                        v-for="item in pages"
                        :key="item"
                        class="link border"
                        :href="item.url"
                        >{{ item.title }}</a
                    >
                </div>
                <hr />
                <div
                    class="flex flex-col items-center justify-between sm:flex-row"
                >
                    <div>
                        Copyright © {{ new Date().getFullYear() }}
                        <a href="https://nexmoe.com/" target="_blank">Nexmoe</a
                        >.
                    </div>
                    <div>
                        <a
                            href="https://beian.miit.gov.cn/"
                            target="_blank"
                            rel="nofollow"
                            >琼ICP备2022008031号-2</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
    pages: [],
    links: []
})

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
<style scoped>
.footer {
    line-height: 2;
}
.link {
    margin-right: 0.8rem;
    display: inline-block;
}
.link.border {
    padding-right: 0.8rem;
    border: none;
    border-right: 1px solid rgba(120, 120, 120, 0.3);
}
.link.border:last-child {
    border-right: none;
}
h3 {
    display: block;
}
.col {
    border-left: 1px solid rgba(120, 120, 120, 0.3);
    padding-left: 2rem;
}
.col:first-child {
    border-left: none;
    padding-left: 0;
    flex: 0 0 33%;
}

@media screen and (max-width: 768px) {
    .col:first-child {
        flex: 0 0 100%;
        padding-top: 0;
        margin-top: 0;
        border-top: none;
    }
    .col {
        padding-top: 0.8rem;
        margin-top: 0.8rem;
        border-top: 1px solid rgba(120, 120, 120, 0.3);
        padding-left: 0;
        border-left: none;
    }
}

.copyright {
    margin: 3rem 0;
    padding-top: 1rem;
}
.copyright hr {
    border: none;
    border-top: 1px solid rgba(120, 120, 120, 0.3);
    margin: 0.5rem 0;
}
</style>
