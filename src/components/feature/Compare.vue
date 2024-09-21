<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, defineProps, withDefaults, ref } from 'vue'
import { z } from 'zod'

const ZCompareItem = z
    .object({
        before: z.string(),
        after: z.string()
    })
    .strict()

export type LCompareItem = z.infer<typeof ZCompareItem>

export interface LCompareProps {
    compare: LCompareItem
}

const { compare } = withDefaults(defineProps<LCompareProps>(), {})

const refCompare = ref<HTMLElement>()
const refAfter = ref<HTMLElement>()

// 初始化GSAP
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    gsap.to('.l-after', {
        opacity: 1,
        scale: 1,
        translateY: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: '.l-after',
            start: 'top 150px', // 触发动画的位置
            end: 'bottom', // 动画结束的位置
            scrub: true // 滚动时平滑过渡
            // markers: true // 调试时显示触发器标记
        },
        onStart: () => {
            console.log('onStart')
            refCompare.value?.classList.add('visible')
        },
        onLeaveBack: () => {
            console.log('onLeaveBack')
            refCompare.value?.classList.remove('visible')
        }
    })
    // 添加滚动触发器
})

</script>

<template>
    <div ref="refCompare" class="l-compare">
        <div class="l-compare-item">
            <div class="l-picture">
                <img class="h-full w-full" :src="compare.before" />
            </div>
            <div ref="refAfter" class="l-picture l-after">
                <img class="h-full w-full" :src="compare.after" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.l-compare {
    @apply flex overflow-hidden justify-center;
    height: 220vh;
}
.l-compare-item {
    @apply w-full h-full;
    position: sticky;
    top: 100px;
    max-width: calc(100vw - 100px);
    max-height: calc(100vh - 200px);
}
.visible {
    @apply overflow-visible;
}
.l-picture {
    @apply w-full absolute overflow-hidden rounded-xl shadow-lg;
    aspect-ratio: 1500 / 722;
}
.l-after {
    @apply opacity-0;
    transform: scale(1.1) translateY(200px);
}
</style>
