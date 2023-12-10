<script setup lang="ts">
import LTile from '../feature/Tile.vue'
import { type LTileProps } from '../feature/Tile.vue'

interface TileWrap extends LTileProps {
    img: string
}

export interface LTileWrapProps extends LTileProps {
    tiles: TileWrap[]
}
const { tiles } = withDefaults(defineProps<LTileWrapProps>(), {})
</script>

<template>
    <div class="l-tile-wrap">
        <LTile v-for="item in tiles" :key="JSON.stringify(item)" v-bind="item">
            <img v-if="item.img" loading="lazy" :src="item.img" />
        </LTile>
    </div>
</template>

<style scoped>
.l-tile-wrap {
    @apply grid gap-6 grid-cols-12;
}
</style>
