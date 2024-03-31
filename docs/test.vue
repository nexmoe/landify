<script setup lang="ts">
import { ref } from 'vue'
import {
    LFooter,
    LComment,
    LSection,
    LTile,
    LGrid,
    LCompare,
    LInfinite,
    LBento,
    LGallery
} from '../src'

const data = {
    comments: [
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
    ],
    footer: {
        links: [
            {
                title: '关于作者',
                children: [
                    {
                        title: 'Nexmoe',
                        url: 'https://i.nexmoe.com/'
                    },
                    {
                        title: '轻惋起始页',
                        url: 'https://nexmoe.com/537283684.html'
                    }
                ]
            },
            {
                title: '其它作品',
                children: [
                    {
                        title: '小舒同学',
                        url: 'https://xiaoshuapp.com/'
                    },
                    {
                        title: 'Monitor Pro',
                        url: 'https://marketplace.visualstudio.com/items?itemName=nexmoe.monitor-pro'
                    }
                ]
            }
        ],
        pages: [
            {
                title: '💬社区讨论',
                url: '/college/community/'
            },
            {
                title: '🌏关注我们',
                url: '/college/about/follow.html'
            },
            {
                title: '🙇🏻特别鸣谢',
                url: '/college/about/thx.html'
            },
            {
                title: '🔐隐私政策',
                url: '/college/agreement/privacy.html'
            },
            {
                title: '👤用户协议',
                url: '/college/agreement/terms.html'
            }
        ]
    }
}

const list = ref([
    {
        title: '主题：撒打算',
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
    }
])
</script>

<template>
    <LSection>
        <LBento></LBento>
    </LSection>
    <!-- <LSection cover>
        <template #title>
            <div class="nex-colored">Landify</div>
        </template>
        <template #des>
            Presentational Components for Landing Page, mainly build for
            VitePress.<br />
            Help you quickly build a landing page.
        </template>
        <LCompare
            :compare="{
                before: 'https://i.dawnlab.me/3f8088adb060eec2e9a1a10ab467695f.png/nexmoe',
                after: 'https://xiaoshu.s3.bitiful.net/Snipaste_2023-07-08_21-07-29.png?fmt=webp'
            }"
        />
    </LSection> -->
    <LSection cover>
        <template #title>个性化。打造专属标签页</template>
        <LGallery :gallery="list" />
    </LSection>
    <LSection color="purple" left>
        <template #title> 连接访问收藏，<br />随时随地。</template>
        <template #des
            >网络世界万物互联，轻松链接到任何地方、使用任何设备访问。让你不仅能启动哔哩哔哩，更能直达感兴趣的视频
        </template>
        <LTile
            :item="{
                title: '你的创意，全屏幕呈现。',
                des: 'iPad 生动鲜活的视网膜显示屏，总会让你不知不觉沉浸其中。只需轻点一下，即可放大生动鲜活的视网膜显示屏，总会让你不知不觉沉浸其中。只需轻点一下，即可放大生动鲜活的视网膜显示屏，总会让你不知不觉沉浸其中。只需轻点一下，即可放大 App 预览，全屏体验你的 app。你也可以自定义 Battleship 和 Brick Breaker 等内置游戏，然后将画面切换至全屏，尽情投入体验。'
            }"
            position="top"
        >
            <img
                loading="lazy"
                src="https://www.apple.com.cn/v/swift/playgrounds/g/images/overview/explore_creation__famblwu7nuq2_large_2x.png"
        /></LTile>
        <LGrid :grid="2">
            <LTile
                title="同步空间，全平台访问。"
                des="轻松连接你的工作电脑与家用电脑，让你在任何地点、使用任何浏览器，便利访问全部收藏夹"
                body="bl"
                size="1/2"
            >
                <img
                    loading="lazy"
                    src="https://i.dawnlab.me/cc15688dc52a551044b83a8a50117ccf.png/nexmoe"
                />
            </LTile>
            <LTile body="a" size="1/2">
                <template #title>
                    <div style="margin: -14px; font-size: 1.25rem">
                        使用小舒同学 Pro，手机也可以轻松访问
                    </div>
                </template>
                <img
                    loading="lazy"
                    src="https://i.dawnlab.me/10d0480ec540b532c66c7f345c1cbdb4.png"
                />
            </LTile>
        </LGrid>
    </LSection>
    <LSection color="purple" left>
        <template #title> 连接访问收藏，<br />随时随地。</template>
        <template #des
            >网络世界万物互联，轻松链接到任何地方、使用任何设备访问。让你不仅能启动哔哩哔哩，更能直达感兴趣的视频
        </template>
        <LTile
            :item="{
                title: '你的创意，全屏幕呈现。',
                des: '从“编程入门”指南开始，你将使用专业开发者日常所用的代码来攻克各个目标。随着学习的一步步深入，你也将迎来更高级别编程概念的挑战。你还可在所学基础之上继续深造，编写更复杂的代码。'
            }"
            position="left"
        >
            <img
                loading="lazy"
                src="https://www.apple.com.cn/v/swift/playgrounds/g/images/overview/commands_fallback__e4n1mvruyoqe_large_2x.jpg"
        /></LTile>
    </LSection>
    <LSection cover>
        <template #title>个性化。打造专属标签页</template>
        <LInfinite :infinites="list" />
    </LSection>
    <!-- <LSection color="gray">
        <template #title>用户评价</template>
        <LComment :comments="data.comments" />
    </LSection> -->
    <LFooter :links="data.footer.links" :pages="data.footer.pages">
        <template #left>
            Copyright © {{ new Date().getFullYear() }}
            <a href="https://i.nexmoe.com/" target="_blank">Nexmoe</a>
        </template>
        <template #right>
            Build with
            <a href="https://github.com/nexmoe/landify" target="_blank"
                >Landify</a
            >
        </template>
    </LFooter>
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
