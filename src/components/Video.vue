<template>
    <iframe
        id="video"
        width="100%"
        :height="height"
        frameborder="0"
        :src="url"
        referrerpolicy="unsafe-url"
        allowfullscreen
    ></iframe>
</template>
<script setup>
import { onMounted, ref } from 'vue'
const height = ref(405)
defineProps({
    url: null
})
onMounted(() => {
    height.value = (document.getElementById('video').clientWidth * 9) / 16
})
</script>
