<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import { z } from 'zod'

const ZCommentItem = z
    .object({
        comment: z.string(),
        author: z.string()
    })
    .strict()

export type LCommentItem = z.infer<typeof ZCommentItem>

export interface LCommentProps {
    comments: LCommentItem[]
}

const { comments } = withDefaults(defineProps<LCommentProps>(), {
    comments: () => []
})

const result = ZCommentItem.array().safeParse(comments)
if (!result.success) {
    console.error(result.error)
}
</script>
<template>
    <div class="nex-comment">
        <div
            v-for="item in comments"
            :key="item.comment"
            class="l-card mb-8 break-inside-avoid p-8"
        >
            <svg
                class="h-8 text-gray-400"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                ></path>
            </svg>
            <div class="mt-4 text-lg leading-snug">
                {{ item.comment }}
            </div>
            <div class="mt-4 text-base">{{ item.author }}</div>
        </div>
    </div>
</template>

<style scoped>
.nex-comment {
    @apply mx-auto w-full md:columns-3 md:gap-8;
}
</style>
