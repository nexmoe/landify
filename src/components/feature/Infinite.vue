<template>
    <div class="infinite">
        <div v-for="i in 3" :key="i" class="row">
            <div v-for="x in 2" :key="x" class="infinite-item">
                <template v-for="(item, index) in list" :key="index">
                    <div v-if="(index + 1) % 3 == i - 1" class="card">
                        <img loading="lazy" :src="item.img" />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5)
}
const list = shuffle([
    {
        img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2022-10-28_11-17-27.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },
    {
        img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2022-10-28_11-35-24.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },
    {
        img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2022-10-28_11-35-44.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },
    {
        img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2021-12-21_17-37-31.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },
    {
        img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2021-12-21_17-38-08.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },
    {
        img: 'https://xiaoshu.s3.bitiful.net/04f2a22d06159f86.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },
    {
        img: 'https://xiaoshu.s3.bitiful.net/d971054b90cc6a7a.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },
    {
        img: 'https://xiaoshu.s3.bitiful.net/Snipaste_2022-06-07_23-26-40.png?fmt=webp&w=1000?fmt=webp&w=1000'
    },
    {
        img: 'https://xiaoshu.s3.bitiful.net/QQ图片20220607234517.jpg?fmt=webp&w=1000?fmt=webp&w=1000'
    }
])
</script>

<style scoped>
.infinite {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-flow: column;
}

.infinite-item {
    display: flex;
    flex-direction: row;
    animation: right-to-left 25s linear infinite;
}

.row:nth-child(2n + 2) .infinite-item {
    animation: left-to-right 25s linear infinite;
}

.row {
    height: 45vh;
    display: flex;
    flex-direction: row;
}

.card {
    height: 100%;
    overflow: hidden;
    display: block;
    font-size: 0;
    padding: 16px;
}

img {
    height: 100%;
    max-width: none;
}

@keyframes right-to-left {
    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    100% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
}

@keyframes left-to-right {
    0% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }

    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}
</style>
