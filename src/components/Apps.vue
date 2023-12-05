<template>
    <div class="apps">
        <div class="grid grid-cols-2 gap-4">
            <div v-for="item in data" :key="item">
                <div class="item">
                    <div class="major">
                        <div class="title">{{ item.title }}</div>
                        <div class="des" v-html="item.description"></div>
                        <a class="button" :href="item.url"
                            >了解更多
                            <svg
                                class="text-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5l7 7-7 7"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
    {
        picture:
            'https://i.dawnlab.me/3d18df019f5c6100ad42a5c3d5841d5e.png/nexmoe',
        title: '小舒同学',
        description:
            '轻松得使你的收藏夹变成强大的新标签页<br>让你重新聚焦真正重要的事情',
        url: '/'
    },
    {
        picture: '/explorer/Snipaste_2022-01-15_14-24-47.png',
        title: '探索者小舒',
        description: '强大快捷的搜索切换工具',
        url: '/explorer/'
    },
    {
        picture:
            'https://i.dawnlab.me/2437f0bbdf2758b379a247f5e9b4d247.png/nexmoe',
        title: 'Meteor New Tab',
        description: '让你的收藏夹再次伟大',
        url: '/meteor/'
    }
])
</script>

<style scoped src="/components/css/grid.css"></style>
<style scoped>
.item {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    padding: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}
.preview img {
    width: 100%;
    border-radius: 8px;
}
.major {
    margin: 1.5rem;
    margin-bottom: 2rem;
}
.title {
    font-size: 2rem;
    margin: 1rem 0;
    color: #000;
    line-height: 1;
}
.des {
    font-size: 1.2rem;
    margin: 1rem 0;
    color: #6e6e73;
}
.button {
    display: flex;
    color: #df5d64;
    align-items: center;
    line-height: 1;
}
.button svg {
    width: 1.15em;
    height: 1.15em;
    margin-left: 2px;
}
.button:hover {
    text-decoration: underline;
}
</style>
