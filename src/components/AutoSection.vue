<script setup lang="ts">
import {
    LCompare,
    LComment,
    type LCompareProps,
    type LCommentProps
} from '../index'

import LGallery, { type LGalleryProps } from './feature/Gallery.vue'

import LTileWrap, { type LTileWrapProps } from './layout/TileWrap.vue'
import LSection, { type LSectionProps } from './layout/Section.vue'

const components = {
    LTileWrap,
    LCompare,
    LComment,
    LGallery
}

export interface LAutoSectionProps extends LSectionProps {
    title: string
    des?: string
    // 全为对象
    props?:
        | LCompareProps
        | LCommentProps
        | LTileWrapProps
        | LGalleryProps
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
    type: 'LTileWrap' | 'LCompare' | 'LComment' | 'LGallery'
    props: LCompareProps | LCommentProps | LTileWrapProps | LGalleryProps
}

const _typeList: _LAutoSectionTypeList[] = []

if (props) {
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
    if ('gallery' in props) {
        _typeList.push({
            type: 'LGallery',
            props: {
                gallery: props.gallery
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
