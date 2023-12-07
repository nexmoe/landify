<template>
    <div v-if="feature.picture" class="w-full">
        <img
            class="max-w-full shadow-lg rounded-2xl"
            loading="lazy"
            :src="feature.picture"
        />
    </div>
</template>

<script setup>
defineProps({
    feature: {}
})
</script>
