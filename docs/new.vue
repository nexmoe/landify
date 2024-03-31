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
        img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2022-10-28_11-17-27.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },
    {
        img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2022-10-28_11-35-24.png?fmt=webp&w=1000?fmt=webp&w=1000'
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
        title: "<span class='colored'>组织。</span>直观、舒适",
        props: {
            tiles: [
                // {
                //     title: '自然流动的心流布局',
                //     des: '我们每天被各式各样的的事情吸引。小舒同学尊重你有限的注意力，使用更为直观的方式组织你的在线生活',
                //     size: '2/3',
                //     body: 'b',
                //     img: 'https://ipfs.crossbell.io/ipfs/bafkreiblywu5l4uhx6i3zve5p3j5rdyomidr464hwh46nw2yuilkzmfmca?img-quality=75&img-format=auto&img-onerror=redirect&img-width=1920'
                // },
                // {
                //     title: '文件夹操作',
                //     size: '1/3',
                //     body: 'a'
                // },
                {
                    title: '多种卡片类型',
                    des: '更直观地管理收藏夹',
                    img: 'https://i.dawnlab.me/b209da41aca1a55c675bfef937386bd6.png',
                    size: '1/3'
                },
                {
                    title: '多栏',
                    des: '多个文件夹并行显示，收藏夹变看板',
                    size: '1/3',
                    img: 'https://i.dawnlab.me/6e9f43002ddbd7aacb2edf14f7024621.png',
                    shadow: true
                },
                {
                    title: '排序、多选……',
                    des: '一切都是为了更便捷地管理你的收藏夹',
                    size: '1/3',
                    body: 'a',
                    img: 'https://i.dawnlab.me/df4678bf1680adb1c7b4f226f54c0762.png/nexmoe'
                },
                {
                    title: '分享',
                    des: '将收藏夹轻松生成链接与二维码分享给朋友们',
                    size: '1/3',
                    img: 'https://i.dawnlab.me/67588bcf5e1bf653c4a2d8b6183336ab.png/nexmoe',
                    shadow: true
                },
                {
                    size: '2/3',
                    title: '快速目录',
                    des: '帮助你在不同文件夹之间轻松跳转，让注意力集中在一处',
                    body: 'b',
                    shadow: true,
                    img: 'https://i.dawnlab.me/72f10bc5dc288c63b529820a36a8d7b3.png/nexmoe'
                }
            ]
        }
    },
    {
        title: '<span class="colored">连接。</span>访问，随时随地',
        des: '网络世界万物互联，轻松链接到任何地方、使用任何设备访问。让你不仅能启动哔哩哔哩，更能直达感兴趣的视频',
        props: {
            tiles: [
                {
                    title: '同步空间，全平台访问。',
                    des: '轻松连接你的工作电脑与家用电脑，让你在任何地点、使用任何浏览器，便利访问全部收藏夹',
                    size: '1/2',
                    body: 'bl',
                    img: 'https://i.dawnlab.me/cc15688dc52a551044b83a8a50117ccf.png/nexmoe'
                },
                {
                    title: '使用小舒同学 Web，手机也可以轻松访问',
                    size: '1/2',
                    body: 'a',
                    img: 'https://i.dawnlab.me/10d0480ec540b532c66c7f345c1cbdb4.png/nexmoe'
                }
            ]
        }
    },
    {
        title: '<span class="colored">个性化。</span>打造专属标签页',
        des: '壁纸、主题、主题色、随意设置的布局、显示效果、自定义 CSS',
        cover: true,
        props: {
            gallery: infinites
        }
    },
    {
        title: '<span class="colored">隐私。</span>很私密，很安全',
        props: {
            tiles: [
                {
                    title: '做收藏夹的搬运工',
                    size: '1/2',
                    color: 'purple',
                    des: '我们不会记录你的收藏夹信息，也不会上传到服务器。小舒同学只是把你的收藏夹数据搬运到新标签页（不使用同步空间时），让私密的数据仍然私密。'
                },
                {
                    title: '严格的限制',
                    size: '1/2',
                    des: '基于 Manifest V3，小舒同学严格控制所需权限，不加载任何远程代码'
                }
            ]
        }
    },
    {
        title: '用户评价',
        props: {
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
