<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

export interface LTileItem {
    title?: string
    des?: string
}

export interface LTileProps {
    item: LTileItem
    position: 'top' | 'bottom' | 'left' | 'right'
    body?: 'bl' | 'b' | 'a' | null
}

const { item, position, body } = withDefaults(defineProps<LTileProps>(), {
    item: () => {},
    position: 'bottom',
    body: null
})
</script>

<template>
    <div class="l-tile" :class="[`l-${position}`, `l-body-${body}`]">
        <div class="l-header" :class="{ 'l-a': body === 'a' }">
            <div class="l-title">{{ item?.title }}<slot name="title" /></div>
            <div v-if="item?.des" class="l-des">{{ item?.des }}</div>
        </div>
        <div class="l-body">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.l-tile {
    @apply rounded-3xl bg-white flex flex-col gap-16 overflow-hidden;
}
.l-header {
    @apply space-y-1 text-base font-bold pt-20 px-24;
}
.l-header .l-title {
    color: var(--l-section-color);
}
.l-body {
    @apply w-full flex items-center h-full pb-20 px-24;
}
.l-body :deep(img) {
    @apply w-full block;
}

/* tile position */
.l-tile.l-top {
    @apply flex-col-reverse;
}
.l-tile.l-bottom {
    @apply flex-col;
}
.l-tile.l-left {
    @apply flex-row-reverse;
}
.l-tile.l-right {
    @apply flex-row;
}
.l-tile.l-left .l-header,
.l-tile.l-right .l-header {
    @apply flex-[5] justify-center flex flex-col;
}
.l-tile.l-left .l-body,
.l-tile.l-right .l-body {
    @apply flex-[6];
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
