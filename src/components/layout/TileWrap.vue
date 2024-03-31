<script setup lang="ts">
import LTile, { type LTileProps } from '../feature/Tile.vue'

export interface LTileWrapProps {
    tiles: LTileProps[]
}
const props = withDefaults(defineProps<LTileWrapProps>(), {})
</script>

<template>
    <div class="l-tile-wrap">
        <template v-for="item in props.tiles" :key="JSON.stringify(item)">
            <LTile v-bind="item"></LTile>
        </template>
    </div>
</template>

<style scoped>
.l-tile-wrap {
    @apply flex flex-col md:grid gap-6 md:grid-cols-12;
}
</style>
