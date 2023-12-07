<template>
    <div class="compare pt-8">
        <div class="compare-item">
            <div class="picture absolute overflow-hidden shadow-lg rounded-xl">
                <img class="w-full h-full" :src="props.compare?.after" />
            </div>
            <div class="picture absolute overflow-hidden after">
                <img
                    class="w-full h-full rounded-xl"
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
    height: 250vh;
    display: flex;
    justify-content: center;
    overflow: hidden;
}
.compare-item {
    position: relative;
    max-width: calc(100vw - 100px);
    max-height: calc(100vh - 200px);
    width: 100%;
    height: 100%;
}
.sticky {
    overflow: visible;
}
.sticky .compare-item {
    position: sticky;
    top: 100px;
}
.picture {
    width: 100%;
    aspect-ratio: 1500 / 722;
}
</style>
