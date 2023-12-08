<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface Link {
    title: string
    url: string
}

interface LinkGroup {
    title: string
    children: Link[]
}

interface Page {
    title: string
    url: string
}

interface Props {
    pages: Page[]
    links: LinkGroup[]
    qrcode: string
}

const { pages, links, qrcode } = withDefaults(defineProps<Props>(), {
    pages: () => [],
    links: () => [],
    qrcode: ''
})
</script>

<template>
    <div class="nex-container py-16 line-height-8 space-y-6">
        <div
            v-if="links.length > 0 || qrcode"
            class="flex flex-row flex-wrap justify-center lg:justify-between"
        >
            <div class="flex flex-wrap gap-16">
                <div
                    v-for="item in links"
                    :key="item.title"
                    class="flex-auto border-gray-300 border-solid"
                >
                    <div class="text-lg font-bold">{{ item.title }}</div>
                    <a
                        v-for="child in item.children"
                        :key="child.title"
                        :href="child.url"
                        class="link mr-4 inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                        >{{ child.title }}</a
                    >
                </div>
            </div>
            <img class="mt-4 w-24 lg:-mt-6" :src="qrcode" />
        </div>

        <div class="pt-4">
            <div class="-mx-3 divide-x divide-gray-300">
                <a
                    v-for="item in pages"
                    :key="item.title"
                    class="px-3"
                    :href="item.url"
                    >{{ item.title }}</a
                >
            </div>
            <div class="my-2 border-t border-gray-300 border-solid" />
            <div class="flex flex-col items-center justify-between sm:flex-row">
                <div>
                    <slot name="left" />
                </div>
                <div>
                    <slot name="right" />
                </div>
            </div>
        </div>
    </div>
</template>
