<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

export interface LGridProps {
    grid: number
}

const { grid } = withDefaults(defineProps<LGridProps>(), {
    grid: 1
})
</script>

<template>
    <div class="l-grid" :class="[`l-grid-${grid}`]">
        <slot />
    </div>
</template>

<style scoped>
.l-grid {
    @apply grid gap-6;
}
.l-grid-1 {
    @apply grid-cols-1;
}
.l-grid-2 {
    @apply grid-cols-1 md:grid-cols-2;
}
.l-grid-2 :deep(.l-tile .l-header),
.l-grid-2 :deep(.l-tile .l-body) {
    @apply px-12;
}
</style>
