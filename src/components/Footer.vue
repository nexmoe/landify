<template>
    <div class="border-t border-gray-200 pt-16 line-height-8">
        <Apps />
        <div class="container">
            <div
                class="flex flex-row flex-wrap justify-center md:justify-between"
            >
                <div v-for="item in links" :key="item" class="col flex-auto">
                    <h3>{{ item.title }}</h3>
                    <a
                        v-for="child in item.children"
                        :key="child"
                        :href="child.url"
                        class="link mr-4 inline-block"
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

        <div class="container">
            <div class="copyright mt-12 pt-4">
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
import Apps from './Apps.vue'

defineProps({
    pages: {
        type: Array,
        required: true
    },
    links: {
        type: Array,
        required: true
    }
})
</script>

<style scoped>
.link.border {
    @apply pr-2 border-none border-r-1 border-solid border-gray-300;
}
.link.border:last-child {
    @apply border-r-0;
}
h3 {
    @apply block;
}
.col {
    @apply pl-2 border-l-1 border-solid border-gray-300;
}
.col:first-child {
    @apply pl-0 flex-none w-1/3;
}

@media screen and (max-width: 768px) {
    .col:first-child {
        @apply w-full pt-0 mt-0 border-t-0;
    }
    .col {
        @apply pt-2 mt-2 border-t-1 border-solid border-gray-300 pl-0 border-l-0;
    }
}

.copyright hr {
    @apply border-none border-t-1 border-solid border-gray-300 my-2;
}
</style>
