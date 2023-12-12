<script setup lang="ts">
import LTile, { type LTileProps } from '../feature/Tile.vue'

interface LTileWrapItem extends LTileProps {
    img?: string
}

export interface LTileWrapProps extends LTileProps {
    tiles: LTileWrapItem[]
}
const { tiles } = withDefaults(defineProps<LTileWrapProps>(), {})
</script>

<template>
    <div class="l-tile-wrap">
        <template v-for="item in tiles" :key="JSON.stringify(item)">
            <LTile v-if="item.img" v-bind="item">
                <img loading="lazy" :src="item.img" />
            </LTile>
            <LTile v-else v-bind="item"></LTile>
        </template>
    </div>
</template>

<style scoped>
.l-tile-wrap {
    @apply grid gap-6 grid-cols-12;
}
</style>
