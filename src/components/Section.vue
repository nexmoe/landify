<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface Props {
    color: 'gray' | 'black' | 'white'
}

const { color } = withDefaults(defineProps<Props>(), {
    color: 'white'
})
</script>
<template>
    <div class="section" :class="color">
        <div class="nex-container">
            <div class="header">
                <div class="title">
                    <slot name="title"></slot>
                </div>
                <div class="des">
                    <slot name="des"></slot>
                </div>
            </div>
            <div class="body">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
.section {
    @apply py-36 overflow-visible;
}

.header {
    @apply pb-16 space-y-6 w-3/4;
    margin-left: 8.333333333%;
}

.title {
    @apply !text-6xl font-bold md:text-5xl;
    color: #00b2aa;
}

.des {
    @apply text-lg font-normal md:text-lg;
}

.section.gray {
    background: linear-gradient(0deg, #f5f5f7 40%, white 60%);
}

.section.black {
    background-color: #000;
    color: #f5f5f7;
}

.section.background {
    background: url(https://i.dawnlab.me/f0ed50c6739b0092ebefb9d281ed10ee.png);
    background-size: cover;
}

.section.background :deep(.card) {
    border: none !important;
}

.section.background header {
    color: #fff;
}
</style>
