<script setup lang="ts">
import { defineProps, withDefaults, onMounted } from 'vue'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { z } from 'zod'

const ZInfiniteItem = z
    .object({
        img: z.string(),
        title: z.string()
    })
    .partial({
        title: true
    })
    .strict()

// https://stackoverflow.com/questions/76470955/unresolvable-type-reference-in-vue-with-typescript
// const ZInfiniteProps = z.object({
//     infinites: ZInfiniteItem.array()
// })

export type LInfiniteItem = z.infer<typeof ZInfiniteItem>

export interface LInfiniteProps {
    infinites: LInfiniteItem[]
}

const { infinites } = withDefaults(defineProps<LInfiniteProps>(), {
    infinites: () => []
})

const result = ZInfiniteItem.array().safeParse(infinites)
if (!result.success) {
    console.error(result.error)
}

const shuffle = (arr: LInfiniteItem[]) => {
    return arr.sort(() => Math.random() - 0.5)
}
const listShuffled = shuffle(infinites)

onMounted(() => {
    Fancybox.bind('[data-fancybox]', {
        Thumbs: {
            showOnStart: false
        }
    })
})
</script>

<template>
    <div class="l-infinite">
        <div v-for="i in 3" :key="i" class="row">
            <div v-for="x in 2" :key="x" class="l-infinite-item">
                <template v-for="(item, index) in listShuffled" :key="index">
                    <div v-if="(index + 1) % 3 == i - 1" class="card">
                        <a
                            :href="item.img"
                            data-fancybox="gallery"
                            :data-caption="item.title"
                        >
                            <img loading="lazy" :src="item.img" />
                        </a>
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
    @apply flex flex-row;
    animation: right-to-left 25s linear infinite;
}

.row:nth-child(2n + 2) .l-infinite-item {
    animation: left-to-right 25s linear infinite;
}

.row:hover .l-infinite-item {
    animation-play-state: paused;
}

.row {
    @apply flex flex-row;
    height: 50vh;
}

.card {
    @apply h-full overflow-hidden block mr-6;
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
