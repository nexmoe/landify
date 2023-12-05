<template>
    <div class="nexmoe-container">
        <div class="store">
            <a
                :class="{ active: activeb == 'Edge' }"
                :href="major.download.edge"
                target="_blank"
                class="rounded-lg"
                @click="clickEdge()"
            >
                <i class="iconfont">&#xec17;</i>
                <img src="/images/Download/edge.png" />Edge</a
            >
            <a :href="major.download.chrome" target="_blank" class="rounded-lg"
                ><i class="iconfont">&#xea47;</i>
                <img src="/images/Download/chrome.png" />Chrome</a
            >
            <a
                v-if="major.download.firefox"
                :class="{ active: activeb == 'Firefox' }"
                :href="major.download.firefox"
                target="_blank"
                class="rounded-lg"
                ><i class="iconfont">&#xe600;</i>
                <img src="/images/Download/firefox.png" />Firefox</a
            >
            <a class="download rounded-lg" :href="major.download.other"
                ><i class="iconfont">&#xe640;</i>{{ major.other }}</a
            >
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
    major: {}
})
const activeb = ref(null)
onMounted(() => {
    if (navigator.userAgent.indexOf('Edg') > -1) {
        activeb.value = 'Edge'
    } else if (navigator.userAgent.indexOf('Firefox') > -1) {
        activeb.value = 'Firefox'
    }
})
const clickEdge = () => {
    if (props.major.download.help) {
        setTimeout(() => {
            window.location.href = props.major.download.help
        }, 100)
    }
}
</script>

<style scoped>
.nexmoe-container {
    text-align: center;
}

.store {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}

@font-face {
    font-family: 'iconfont';
    /* Project id 2804914 */
    src:
        url('//at.alicdn.com/t/font_2804914_x3rw8250nc.woff2?t=1632542264872')
            format('woff2'),
        url('//at.alicdn.com/t/font_2804914_x3rw8250nc.woff?t=1632542264872')
            format('woff'),
        url('//at.alicdn.com/t/font_2804914_x3rw8250nc.ttf?t=1632542264872')
            format('truetype');
}

.iconfont {
    font-family: 'iconfont' !important;
    font-size: 32px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    margin-right: 7px;
}

.store a {
    transition: all 0.3s ease;
    margin: 0 12px;
    height: 56px;
    width: 156px;
    text-decoration: none;
    font-size: 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    border: 3px solid;
    background-color: #fff;
    opacity: 0.8;
    margin-bottom: 36px;
    box-sizing: unset;
}

@media screen and (max-width: 768px) {
    .major {
        text-align: center;
    }

    .store a {
        width: 136px;
        height: 50px;
        font-size: 18px;
    }
}

.store a.active {
    animation: fade 3s infinite;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
}

.store a:hover {
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.7);
}

@keyframes fade {
    0% {
    }

    50% {
        border-color: #000;
        background-color: #000;
        color: #fff;
    }

    100% {
    }
}

.store a.active i {
    display: none;
}

.store a img {
    display: none;
}

.store a.active img {
    display: block;
}

.store a img {
    width: 46px;
    margin-right: 2px;
}

.cover {
    width: 100%;
    margin-top: 100px;
    border-radius: 8px;
    box-shadow: 0 0 12px rgb(0 0 0 / 10%);
}
</style>
