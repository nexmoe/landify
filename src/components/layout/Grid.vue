<template>
    <div class="l-grid">
        <slot />
    </div>
</template>

<style scoped>
.l-grid {
    @apply grid gap-6 grid-cols-12;
}
</style>
