<script setup lang="ts">
import lax from 'lax.js'
import { onMounted, defineProps, withDefaults } from 'vue'

export interface LCompareProps {
    before: string
    after: string
}

const { before, after } = withDefaults(defineProps<LCompareProps>(), {
    before: '',
    after: ''
})

onMounted(() => {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })

    // Add animation bindings to elements
    const compare = document.querySelector('.l-compare')
    const easing = 'easeInQuad'
    lax.addElements(
        '.after',
        {
            scrollY: {
                opacity: [['elInY+150', 'elOutY-200'], [0, 1], { easing }],
                scale: [['elInY+150', 'elOutY-200'], [1.1, 1], { easing }],
                translateY: [['elInY+150', 'elOutY-200'], [200, 0], { easing }]
            }
        },
        {
            onUpdate: function (driverValues) {
                const scrollY = driverValues.scrollY[0]
                if (scrollY >= compare.offsetTop - 63) {
                    compare.classList.add('sticky')
                } else {
                    compare.classList.remove('sticky')
                }
            }
        }
    )
})
</script>

<template>
    <div class="l-compare">
        <div class="l-compare-item">
            <div class="l-picture">
                <img class="h-full w-full" :src="before" />
            </div>
            <div class="l-picture after">
                <img class="h-full w-full" :src="after" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.l-compare {
    @apply flex overflow-hidden justify-center;
    height: 250vh;
}
.l-compare-item {
    @apply relative w-full h-full;
    max-width: calc(100vw - 100px);
    max-height: calc(100vh - 200px);
}
.sticky {
    @apply overflow-visible;
}
.sticky .l-compare-item {
    position: sticky;
    top: 100px;
}
.l-picture {
    @apply w-full absolute overflow-hidden rounded-xl shadow-lg;
    aspect-ratio: 1500 / 722;
}
</style>
