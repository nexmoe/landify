<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

export interface LSectionProps {
    color?: 'gray' | 'black' | 'white' | 'purple' | 'blue'
    left?: boolean
    cover?: boolean
}

const { color, left, cover } = withDefaults(defineProps<LSectionProps>(), {
    color: 'white',
    left: false,
    cover: false
})
</script>
<template>
    <div class="l-section" :class="color">
        <div class="l-container">
            <div class="l-header" :class="{ left }">
                <div class="l-title">
                    <slot name="title"></slot>
                </div>
                <div v-if="$slots.des" class="l-des">
                    <slot name="des"></slot>
                </div>
            </div>
        </div>
        <div class="l-body" :class="[{ 'l-container': !cover }]">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.l-section {
    @apply py-36 overflow-visible;
}

.l-header {
    @apply pb-16 space-y-6 w-3/4 mx-auto text-center;
}

.l-header.left {
    @apply text-left;
    margin-left: 9%;
}

.l-header .l-title {
    @apply !text-6xl font-bold md:text-5xl;
    color: var(--l-section-color);
}

.l-header .l-des {
    @apply text-lg font-normal md:text-lg;
}

.l-body {
    @apply space-y-6;
}

.l-section.gray {
    background: linear-gradient(0deg, #f5f5f7 40%, white 60%);
}

.l-section.black {
    background-color: #000;
    color: #f5f5f7;
}

.l-section.purple {
    background: linear-gradient(180deg, white 18%, rgba(255, 255, 255, 0) 62%),
        linear-gradient(
            340deg,
            rgba(253, 224, 223, 0.5),
            rgba(253, 224, 223, 0) 70%
        ),
        linear-gradient(
            220deg,
            rgba(235, 220, 254, 0.6) 20%,
            rgba(235, 220, 254, 0) 50%
        ),
        linear-gradient(
            140deg,
            rgba(235, 220, 254, 0.6) 20%,
            rgba(255, 220, 254, 0) 65%
        );
    --l-section-color: #5655d5;
}

.l-section.blue {
    background: linear-gradient(
            70% 18% ellipse at var(--real-swift-code-radial-gradient-position),
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0)
        ),
        linear-gradient(
            180deg,
            #aecffc var(--real-swift-code-gradient-start),
            rgba(174, 207, 252, 0) 48%
        ),
        linear-gradient(
            340deg,
            rgba(219, 245, 255, 0.5),
            rgba(219, 245, 255, 0) 65%
        ),
        linear-gradient(
            220deg,
            rgba(101, 163, 204, 0.6) 30%,
            rgba(101, 163, 204, 0) 65%
        ),
        linear-gradient(
            140deg,
            rgba(125, 180, 253, 0.6) 30%,
            rgba(125, 180, 253, 0) 80%
        );
}

.l-section .l-colored {
    color: var(--l-section-color);
}
</style>
