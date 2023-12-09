<script setup lang="ts">
import { LFooter, LComment, LSection, LTile, LGrid, LCompare } from './src'
import data from './data.json'
</script>

<template>
    <LSection cover>
        <template #title>
            费尽心思折腾主页<br />
            <div class="nex-colored">不如好好整理收藏夹</div>
        </template>
        <template #des
            >轻松一步，收藏夹变成强大的新标签页<br />助你聚焦真正重要的事情
        </template>
        <LCompare
            before="https://i.dawnlab.me/3f8088adb060eec2e9a1a10ab467695f.png/nexmoe"
            after="https://xiaoshu.s3.bitiful.net/Snipaste_2023-07-08_21-07-29.png?fmt=webp"
        />
    </LSection>
    <LSection color="purple" left>
        <template #title> 连接访问收藏，<br />随时随地。</template>
        <!-- <template #des
            >网络世界万物互联，轻松链接到任何地方、使用任何设备访问。让你不仅能启动哔哩哔哩，更能直达感兴趣的视频
        </template> -->
        <!-- <LTile
            :item="{
                title: '你的创意，全屏幕呈现。',
                des: 'iPad 生动鲜活的视网膜显示屏，总会让你不知不觉沉浸其中。只需轻点一下，即可放大生动鲜活的视网膜显示屏，总会让你不知不觉沉浸其中。只需轻点一下，即可放大生动鲜活的视网膜显示屏，总会让你不知不觉沉浸其中。只需轻点一下，即可放大 App 预览，全屏体验你的 app。你也可以自定义 Battleship 和 Brick Breaker 等内置游戏，然后将画面切换至全屏，尽情投入体验。'
            }"
            position="top"
        >
            <img
                loading="lazy"
                src="https://www.apple.com.cn/v/swift/playgrounds/g/images/overview/explore_creation__famblwu7nuq2_large_2x.png"
        /></LTile> -->
        <LGrid :grid="2">
            <LTile
                :item="{
                    title: '同步空间，全平台访问。',
                    des: '轻松连接你的工作电脑与家用电脑，让你在任何地点、使用任何浏览器，便利访问全部收藏夹'
                }"
                body="bl"
            >
                <img
                    loading="lazy"
                    src="https://i.dawnlab.me/cc15688dc52a551044b83a8a50117ccf.png/nexmoe"
                />
            </LTile>
            <LTile body="a">
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
    <LSection color="gray">
        <template #title>用户评价</template>
        <LComment :comments="data.comments" />
    </LSection>
    <LFooter :links="data.footer.links" :pages="data.footer.pages">
        <template #left>
            Copyright © {{ new Date().getFullYear() }}
            <a href="https://i.nexmoe.com/" target="_blank">Nexmoe</a>.
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
