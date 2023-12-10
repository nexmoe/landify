<script setup lang="ts">
import LTile from './feature/Tile.vue'
import LInfinite from './feature/Infinite.vue'
import LCompare from './feature/Compare.vue'
import LComment from './feature/Comment.vue'
import LSection from './layout/Section.vue'

import { type LSectionProps } from './layout/Section.vue'
import { type LTileProps } from './feature/Tile.vue'
import { type LInfiniteProps } from './feature/Infinite.vue'
import { type LCompareProps } from './feature/Compare.vue'
import { type LCommentProps } from './feature/Comment.vue'

const components = {
    LTile,
    LInfinite,
    LCompare,
    LComment
}

interface Tile {
    tile?: LTileProps
    tiles?: LTileProps[]
}

export interface LAutoSectionProps extends LSectionProps {
    title: string
    des?: string
    props?:
        | LTileProps
        | LInfiniteProps
        | LCompareProps
        | LCommentProps
        | Tile
        | null
}

const { color, left, cover, props } = withDefaults(
    defineProps<LAutoSectionProps>(),
    {
        des: '',
        props: null
    }
)

let _type: 'LTile' | 'LInfinite' | 'LCompare' | 'LComment' | null = null

if (props) {
    if ('infinites' in props) {
        _type = 'LInfinite'
    }
    if ('comments' in props) {
        _type = 'LComment'
    }
    if ('before' in props || 'after' in props) {
        _type = 'LCompare'
    }
    if ('tile' in props) {
        _type = 'LTile'
    }
}
</script>

<template>
    <LSection :color="color" :left="left" :cover="cover">
        <template #title><div v-html="title" /></template>
        <template #des><div v-html="des" /></template>
        <component :is="components[_type]" v-if="_type" v-bind="props" />
    </LSection>
</template>
