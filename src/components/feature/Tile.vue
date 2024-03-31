<script setup lang="ts">
import { defineProps, withDefaults, onMounted } from 'vue'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

export interface LTileProps {
    title?: string
    des?: string
    position?: 'top' | 'bottom' | 'left' | 'right' // picture position
    body?: 'bl' | 'b' | 'a' | null
    size?: 1 | '1/2' | '1/3' | '2/3'
    color?: 'purple' | 'white'
    img?: string
    shadow?: boolean
}

const props = withDefaults(defineProps<LTileProps>(), {
    position: 'bottom',
    body: null,
    size: 1,
    color: 'white',
    shadow: false
})

const _size = props.size !== 1 ? props.size.replace('/', '_') : props.size

onMounted(() => {
    Fancybox.bind('[data-fancybox]', {
        Thumbs: {
            showOnStart: false
        }
    })
})
</script>

<template>
    <div
        class="l-card l-tile"
        :class="[
            `l-position-${position}`,
            `l-body-${body}`,
            `l-size-${_size}`,
            color,
            { 'no-body': !props.img }
        ]"
    >
        <div class="l-header" :class="{ 'l-a': body === 'a' }">
            <h3 class="l-title">{{ title }}<slot name="title" /></h3>
            <div v-if="des" class="l-des text-lg">{{ des }}</div>
        </div>
        <div v-if="props.img" class="l-body">
            <img
                :class="{ 'shadow-lg': props.shadow }"
                loading="lazy"
                :src="props.img"
                :alt="title"
                data-fancybox="gallery"
                :data-caption="title"
            />
        </div>
    </div>
</template>

<style scoped>
.l-tile {
    @apply rounded-3xl flex flex-col gap-16 overflow-hidden;
    min-height: 336px;
}
.l-tile.purple {
    background-image: linear-gradient(225deg, #667eea 0, #764ba2 100%);
    color: white;
}
.l-size-1 {
    @apply md:col-span-12;
}
.l-size-1_2 {
    @apply col-span-6;
}
.l-size-1_3 {
    @apply col-span-4;
}
.l-size-2_3 {
    @apply col-span-8;
}

.l-header {
    @apply space-y-1 pt-16 px-20;
}
.l-header .l-title {
    @apply text-xl font-bold;
    color: var(--l-section-color);
}

.l-tile.no-body {
    @apply justify-center;
}
.l-tile.no-body .l-header {
    @apply pb-16 !px-12;
}
.l-tile.no-body .l-header .l-title {
    @apply text-3xl mb-3;
}
.l-body {
    @apply w-full flex items-center h-full pb-16 px-12;
}
.l-size-1_2 .l-header,
.l-size-1_2 .l-body {
    @apply px-12;
}
.l-body :deep(img) {
    @apply w-full block rounded-xl;
}

/* tile position */
.l-tile.l-position-top {
    @apply flex-col-reverse;
}
.l-tile.l-position-top .l-header {
    @apply pt-0 pb-20;
}
.l-tile.l-position-top .l-body {
    @apply pb-0 pt-20;
}
.l-tile.l-position-bottom {
    @apply flex-col;
}

.l-tile.l-position-left {
    @apply flex-row-reverse;
}
.l-tile.l-position-right {
    @apply flex-row;
}
.l-tile.l-position-left,
.l-tile.l-position-right {
    @apply py-20 px-24;
}
.l-tile.l-position-left .l-header,
.l-tile.l-position-right .l-header {
    @apply flex-[5] justify-center flex flex-col p-0;
}
.l-tile.l-position-left .l-body,
.l-tile.l-position-right .l-body {
    @apply flex-[6] p-0;
}

/* body position */
.l-body-bl .l-body {
    @apply items-end !pl-0 pb-0;
}
.l-body-b .l-body {
    @apply items-end pb-0;
}
.l-body-a .l-body {
    @apply items-end !p-0;
}
.l-body-b :deep(img) {
    @apply rounded-b-none;
}
</style>
