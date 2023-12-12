<script setup lang="ts">
import theme from '@xiaoshuapp/theme/manifest.json'
import { LAutoSection, type LAutoSectionProps } from '../src'

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

const infinites = [
    {
        img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2022-10-28_11-17-27.png?fmt=webp&w=1000?fmt=webp&w=1000',
        img2: 'https://xiaoshu.s3.bitiful.net/Snipaste_2022-10-28_11-17-27.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },
    {
        img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2022-10-28_11-35-24.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },

    {},
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
        title: 'Landify, Components for Landing Page',
        des: `Presentational Components for Landing Page, mainly build for
            VitePress.<br />
            Help you quickly build a landing page.`,
        color: 'blue'
    },
    {
        title: 'Privacy',
        props: {
            tiles: [
                {
                    title: 'Be a collection porter',
                    size: '1/2',
                    color: 'purple',
                    des: 'We do not record your favorites, nor do we upload them to the server. Buma just moved your favorites data to a new TAB, leaving the private data private (without using syncing space).'
                },
                {
                    title: 'Strict restriction',
                    size: '1/2',
                    des: 'Based on Manifest V3, Buma strictly controls the required permissions and does not load any remote code'
                }
            ]
        }
    },
    {
        title: 'Tile',
        color: 'gray',
        props: {
            tiles: [
                {
                    title: '对比',
                    img: 'https://i.dawnlab.me/3f8088adb060eec2e9a1a10ab467695f.png/nexmoe'
                },
                {
                    title: '同步空间，全平台访问。',
                    des: '轻松连接你的工作电脑与家用电脑，让你在任何地点、使用任何浏览器，便利访问全部收藏夹',
                    size: '1/2',
                    body: 'bl',
                    img: 'https://i.dawnlab.me/cc15688dc52a551044b83a8a50117ccf.png/nexmoe'
                },
                {
                    title: '对比',
                    size: '1/2',
                    img: 'https://i.dawnlab.me/3f8088adb060eec2e9a1a10ab467695f.png/nexmoe'
                }
            ]
        }
    },
    {
        title: '对比',
        cover: true,
        color: 'gray',
        props: {
            compare: {
                before: 'https://i.dawnlab.me/3f8088adb060eec2e9a1a10ab467695f.png/nexmoe',
                after: 'https://xiaoshu.s3.bitiful.net/Snipaste_2023-07-08_21-07-29.png?fmt=webp'
            }
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
            infinites
        }
    },
    {
        title: '无限滚动+评论',
        cover: true,
        props: {
            infinites,
            comments
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
