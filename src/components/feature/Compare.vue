<template>
    <div class="compare pt-8">
        <div class="compare-item">
            <div class="picture absolute overflow-hidden rounded-xl shadow-lg">
                <img class="h-full w-full" :src="props.compare?.after" />
            </div>
            <div class="picture after absolute overflow-hidden">
                <img
                    class="h-full w-full rounded-xl"
                    :src="props.compare?.before"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import lax from 'lax.js'
import { onMounted } from 'vue'

const props = defineProps({
    compare: {}
})

onMounted(() => {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })

    // Add animation bindings to elements
    const compare = document.querySelector('.compare')
    const compareItem = document.querySelector('.compare-item')
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
            onUpdate: function (driverValues, domElement) {
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

<style scoped>
.compare {
    @apply flex overflow-hidden justify-center;
    height: 250vh;
}
.compare-item {
    @apply relative w-full h-full;
    max-width: calc(100vw - 100px);
    max-height: calc(100vh - 200px);
}
.sticky {
    @apply overflow-visible;
}
.sticky .compare-item {
    position: sticky;
    top: 100px;
}
.picture {
    @apply w-full;
    aspect-ratio: 1500 / 722;
}
</style>
