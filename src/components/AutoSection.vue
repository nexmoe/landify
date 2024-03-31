<script setup lang="ts">
import LInfinite, { type LInfiniteProps } from './feature/Infinite.vue'
import LCompare, { type LCompareProps } from './feature/Compare.vue'
import LComment, { type LCommentProps } from './feature/Comment.vue'
import LBento from './feature/Bento.vue'

import LTileWrap, { type LTileWrapProps } from './layout/TileWrap.vue'
import LSection, { type LSectionProps } from './layout/Section.vue'

const components = {
    LTileWrap,
    LInfinite,
    LCompare,
    LComment,
    LBento
}

export interface LAutoSectionProps extends LSectionProps {
    title: string
    des?: string
    // 全为对象
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

interface _LAutoSectionTypeList {
    type: 'LTileWrap' | 'LInfinite' | 'LCompare' | 'LComment' | 'LBento'
    props: LInfiniteProps | LCompareProps | LCommentProps | LTileWrapProps
}

const _typeList: _LAutoSectionTypeList[] = []

if (props) {
    if ('infinites' in props) {
        _typeList.push({
            type: 'LInfinite',
            props: {
                infinites: props.infinites
            }
        })
    }
    if ('comments' in props) {
        _typeList.push({
            type: 'LComment',
            props: {
                comments: props.comments
            }
        })
    }
    if ('compare' in props) {
        _typeList.push({
            type: 'LCompare',
            props: {
                compare: props.compare
            }
        })
    }
    if ('tiles' in props) {
        _typeList.push({
            type: 'LTileWrap',
            props: {
                tiles: props.tiles
            }
        })
    }
    if ('bento' in props) {
        _typeList.push({
            type: 'LBento',
            props: {
                bento: props.bento
            }
        })
    }
}
</script>

<template>
    <LSection :color="color" :left="left" :cover="cover">
        <template #title><div v-html="title" /></template>
        <template #des><div v-html="des" /></template>
        <component
            :is="components[_type.type]"
            v-for="_type in _typeList"
            :key="_type.type"
            v-bind="props"
        />
    </LSection>
</template>
