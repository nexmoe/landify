<template>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
            v-for="item in feature.items"
            :key="item"
            class="card shadow-2xl rounded-3xl"
            :class="[item.color]"
        >
            <div
                class="major"
                :class="{
                    noPicture: !item.img
                }"
            >
                <h3 v-html="item.title"></h3>
                <p v-html="item.des"></p>
            </div>
            <div
                v-if="item.img"
                class="picture"
                :class="[item.imgClass, { padding: item.imgM }]"
            >
                <img loading="lazy" :src="item.img" />
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    feature: {}
})
</script>

<style scoped>
.card {
    display: block;
    background-color: #fff;
    width: 100%;
    height: 100%;
    min-height: 200px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
}
.major {
    padding: 72px 42px;
}
.noPicture {
    padding: 120px 72px;
}
h3 {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    line-height: 1;
}
p {
    font-size: 1.15rem;
    line-height: 1.5rem;
    margin-bottom: 1rem;
    opacity: 0.9;
}
.major > *:last-child {
    margin-bottom: 0;
}
.picture {
    width: 100%;
}
.padding {
    padding-left: 40px;
    padding-bottom: 40px;
}
.pr-42 {
    padding-right: 42px;
}
.green {
    background-image: linear-gradient(
        180deg,
        #34635e 10%,
        #6e8c7c 40%,
        #bfc099 100%
    );
}
.deepblue {
    background-image: linear-gradient(225deg, #7ba1f0 0, #133a86 100%);
}
.blue {
    background-image: linear-gradient(to top left, #1abcfa, #1c7df3);
}
.white {
    color: #000;
}
.purple {
    background-image: linear-gradient(225deg, #667eea 0, #764ba2 100%);
}
.gray {
    color: #000;
    background-color: rgb(245, 245, 245);
}
</style>
