<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

export interface LTileProps {
    title?: string
    des?: string
    position?: 'top' | 'bottom' | 'left' | 'right'
    body?: 'bl' | 'b' | 'a' | null
    size?: 1 | '1/2'
    color?: 'purple' | 'white'
}

const { title, des, position, body, size } = withDefaults(
    defineProps<LTileProps>(),
    {
        title: '',
        des: '',
        position: 'bottom',
        body: null,
        size: 1,
        color: 'white'
    }
)

const _size = size !== 1 ? size.replace('/', '_') : size
</script>

<template>
    <div
        class="l-tile"
        :class="[
            `l-position-${position}`,
            `l-body-${body}`,
            `l-size-${_size}`,
            color,
            { 'no-body': !$slots.default }
        ]"
    >
        <div class="l-header" :class="{ 'l-a': body === 'a' }">
            <div class="l-title">{{ title }}<slot name="title" /></div>
            <div v-if="des" class="l-des">{{ des }}</div>
        </div>
        <div v-if="$slots.default" class="l-body">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.l-tile {
    @apply rounded-3xl bg-white flex flex-col gap-16 overflow-hidden;
    min-height: 336px;
}
.l-tile.purple {
    background-image: linear-gradient(225deg, #667eea 0, #764ba2 100%);
    color: white;
}
.l-size-1 {
    @apply col-span-12;
}
.l-size-1_2 {
    @apply col-span-6;
}
.l-header {
    @apply space-y-1 text-base font-bold pt-20 px-24;
}
.l-header .l-title {
    @apply text-xl;
    color: var(--l-section-color);
}

.l-tile.no-body {
    @apply justify-center;
}
.l-tile.no-body .l-header {
    @apply pb-20 !px-16;
}
.l-tile.no-body .l-header .l-title {
    @apply text-3xl mb-3;
}
.l-body {
    @apply w-full flex items-center h-full pb-20 px-24;
}
.l-size-1_2 .l-header,
.l-size-1_2 .l-body {
    @apply px-12;
}
.l-body :deep(img) {
    @apply w-full block rounded-2xl;
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
    @apply !p-0;
}
.l-body-a .l-header {
    @apply absolute pt-12;
}
.l-body-a .l-header .l-title {
    color: white;
}
</style>
