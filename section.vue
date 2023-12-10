<script setup lang="ts">
import theme from '@xiaoshuapp/theme/manifest.json'
import { LAutoSection, type LAutoSectionProps } from './src'

const comments = [
    {
        comment:
            '非常好。页面美观。理念先进：“与其在信息流中漂泊，不如反刍收藏过的高质量内容。”',
        author: 'Cheng Ma, 2022年7月18日 on Chrome'
    },
    {
        comment: '用起来非常舒服,  以前很多文章教程在收藏夹吃灰的都出来了',
        author: 'zhi wang, 2022年4月21日'
    },
    {
        comment:
            '真的算宝藏扩展了，没有太多很重的东西，就从自己的收藏夹建首页，正是我需要的功能',
        author: '蒋蒋, 2022年7月19日 on Firefox'
    },
    {
        comment:
            '这个扩展很符合我的心意，能在打出关键词的瞬间推荐书签的网站，这个独特功能很实用。而且自定义性很强',
        author: '堡包, 2022年7月21日 on Edge'
    },
    {
        comment:
            '以往喜欢聚焦类的标签页，现在发现了小舒同学，能把书签以扁平化图形的方式放在页面上，清晰明了。',
        author: 'Li, 2022年7月22日 on Edge'
    },
    {
        comment:
            '太棒了，我真的不想折腾拨号页花里胡哨的功能，我只想快速导入链接，然后生成一个简洁的图标。',
        author: 'lele finley, 2022年7月30日 on Chrome'
    },
    {
        comment:
            '太喜欢小舒同学啦！因为是仓鼠所以收藏夹都特别臃肿，为了不让收藏的宝贝们吃灰我之前都是用notion把各平台的收藏夹整合到一起，这样特别费时间o(╥﹏╥)o 现在管理收藏夹就easy多啦',
        author: 'dan酱, 2022年8月30日 on Firefox'
    }
]

const list = [
    {
        img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2022-10-28_11-17-27.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },
    {
        img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2022-10-28_11-35-24.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },

    {
        img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2021-12-21_17-37-31.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },
    {
        img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2022-06-07_23-26-40.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },
    {
        img: 'https://xiaoshu.s3.bitiful.net/QQ图片20220607234517.jpg?fmt=webp&w=1000?fmt=webp&w=1000'
    },
    ...theme.map((x: any) => {
        return {
            img: x.src,
            title: `主题 ${x.name}`
        }
    })
]

const datax: LAutoSectionProps[] = [
    {
        title: 'Auto Section',
        color: 'purple'
    },
    {
        title: '对比',
        color: 'gray',
        props: {
            before: 'https://i.dawnlab.me/3f8088adb060eec2e9a1a10ab467695f.png/nexmoe',
            after: 'https://xiaoshu.s3.bitiful.net/Snipaste_2023-07-08_21-07-29.png?fmt=webp'
        }
    },
    {
        title: '评论',
        color: 'gray',
        props: {
            comments
        }
    },
    {
        title: '无限滚动',
        cover: true,
        props: {
            infinites: list
        }
    }
]
</script>

<template>
    <LAutoSection
        v-for="item in datax"
        :key="item.title"
        v-bind:="item"
    ></LAutoSection>
</template>

<style scoped>
.nex-colored {
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(225deg, #ff0844 0%, #ffb199 100%);
}
</style>

<style>
.VPHome {
    padding-bottom: 0 !important;
}
</style>
