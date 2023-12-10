<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

export interface LTileItem {
    title?: string
    des?: string
}

export interface LTileProps {
    item: LTileItem
    position?: 'top' | 'bottom' | 'left' | 'right'
    body?: 'bl' | 'b' | 'a' | null
}

const { item, position, body } = withDefaults(defineProps<LTileProps>(), {
    position: 'bottom',
    body: null
})
</script>

<template>
    <div class="l-tile" :class="[`l-position-${position}`, `l-body-${body}`]">
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
