<template>
    <iframe
        id="video"
        class="aspect-video w-full"
        frameborder="0"
        :src="url"
        referrerpolicy="unsafe-url"
        allowfullscreen
    ></iframe>
</template>
<script setup>
defineProps({
    url: null
})
</script>
