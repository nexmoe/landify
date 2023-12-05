<template>
    <div v-if="feature.picture" class="picture">
        <img loading="lazy" :src="feature.picture" />
    </div>
</template>

<script setup>
defineProps({
    feature: {}
})
</script>

<style scoped>
.picture {
    width: 100%;
}

.picture img {
    max-width: 100%;
    border-radius: var(--xs-radius-3);
    box-shadow: var(--xs-shadow);
}
</style>
