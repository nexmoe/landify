<script setup lang="ts">
import LTileWrap from './layout/TileWrap.vue'
import LInfinite from './feature/Infinite.vue'
import LCompare from './feature/Compare.vue'
import LComment from './feature/Comment.vue'
import LSection from './layout/Section.vue'

import { type LSectionProps } from './layout/Section.vue'
import { type LTileWrapProps } from './layout/TileWrap.vue'
import { type LInfiniteProps } from './feature/Infinite.vue'
import { type LCompareProps } from './feature/Compare.vue'
import { type LCommentProps } from './feature/Comment.vue'

const components = {
    LTileWrap,
    LInfinite,
    LCompare,
    LComment
}

export interface LAutoSectionProps extends LSectionProps {
    title: string
    des?: string
    props?:
        | LInfiniteProps
        | LCompareProps
        | LCommentProps
        | LTileWrapProps
        | null
}

const { color, left, cover, props } = withDefaults(
    defineProps<LAutoSectionProps>(),
    {
        des: '',
        props: null
    }
)

let _type: 'LTileWrap' | 'LInfinite' | 'LCompare' | 'LComment' | null = null

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
    if ('tiles' in props) {
        _type = 'LTileWrap'
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
