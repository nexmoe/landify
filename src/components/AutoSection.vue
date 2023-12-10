<script setup lang="ts">
import LTile from './feature/Tile.vue'
import LSection from './layout/Section.vue'
import { type LSectionProps } from './layout/Section.vue'

const components = {
    LTile
}

export interface LAutoSectionProps extends LSectionProps {
    type?: 'LTile'
    items: []
}

const { type, color, left, cover } = withDefaults(
    defineProps<LAutoSectionProps>(),
    {
        color: 'white',
        left: false,
        cover: false,
        type: 'LTile'
    }
)
</script>

<template>
    <LSection :color="color" :left="left" :cover="cover">
        <template #title></template>
        <template #des></template>
        <component :is="components[type]" />
    </LSection>
</template>
