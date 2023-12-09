<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

export interface LInfiniteProps {
    list: {
        img: string
    }[]
}

const { list } = withDefaults(defineProps<LInfiniteProps>(), {
    list: () => []
})
const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5)
}
const listShuffled = shuffle(list)
</script>

<template>
    <div class="l-infinite">
        <div v-for="i in 3" :key="i" class="row">
            <div v-for="x in 2" :key="x" class="l-infinite-item">
                <template v-for="(item, index) in listShuffled" :key="index">
                    <div v-if="(index + 1) % 3 == i - 1" class="card">
                        <img loading="lazy" :src="item.img" />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped>
.l-infinite {
    @apply w-full overflow-hidden flex flex-col gap-6;
}

.l-infinite-item {
    @apply flex flex-row gap-6;
    animation: right-to-left 25s linear infinite;
}

.row:nth-child(2n + 2) .l-infinite-item {
    animation: left-to-right 25s linear infinite;
}

.row:hover .l-infinite-item {
    animation-play-state: paused;
}

.row {
    @apply flex flex-row gap-6;
    height: 50vh;
}

.card {
    @apply h-full overflow-hidden block;
    font-size: 0;
}

img {
    height: 100%;
    max-width: none;
}

@keyframes right-to-left {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    100% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
}

@keyframes left-to-right {
    0% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }

    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}
</style>
