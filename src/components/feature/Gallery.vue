<script setup lang="ts">
import { defineProps, withDefaults, onMounted } from 'vue'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { z } from 'zod'

const ZGalleryItem = z
    .object({
        img: z.string(),
        title: z.string()
    })
    .partial({
        title: true
    })
// .strict()

// https://stackoverflow.com/questions/76470955/unresolvable-type-reference-in-vue-with-typescript
// const ZGalleryProps = z.object({
//     Gallerys: ZGalleryItem.array()
// })

export type LGalleryItem = z.infer<typeof ZGalleryItem>

export interface LGalleryProps {
    gallery: LGalleryItem[]
}

const props = withDefaults(defineProps<LGalleryProps>(), {
    gallery: () => []
})

const result = ZGalleryItem.array().safeParse(props.gallery)
if (!result.success) {
    console.error(result.error)
}

const shuffle = (arr: LGalleryItem[]): LGalleryItem[] => {
    return arr.sort(() => Math.random() - 0.5)
}
const listShuffled = shuffle(props.gallery)

onMounted(() => {
    Fancybox.bind('[data-fancybox]', {
        Thumbs: {
            showOnStart: false
        }
    })
})
</script>

<template>
    <div class="l-gallery mx-auto w-full md:columns-2 md:gap-8 px-8">
        <div
            class="l-card relative mb-8 break-inside-avoid overflow-hidden block"
            v-for="(item, index) in listShuffled"
            :key="index"
        >
            <img
                loading="lazy"
                data-fancybox="gallery"
                :data-caption="item.title"
                :alt="item.title"
                :src="item.img"
            />
            <div
                v-if="item.title"
                class="absolute py-2 px-4 bottom-0 left-0 my-5 mx-6 bg-white/50 rounded-full backdrop-blur shadow-md"
            >
                {{ item.title }}
            </div>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 100%;
    display: block;
}
</style>
