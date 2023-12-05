<template>
    <div class="feature">
        <div class="nexmoe-container">
            <div class="major">
                <h2 :id="feature.title" v-html="feature.title"></h2>
                <p>
                    {{ feature.description }}
                </p>
            </div>
            <div class="picture">
                <video v-if="feature.video" autoplay loop playsinline muted>
                    <source :src="feature.video" type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                </video>

                <img v-else loading="lazy" :src="feature.picture" />
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
.feature {
    padding: 6rem 0;
}
.nexmoe-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.feature:nth-child(2n + 2) .nexmoe-container {
    flex-direction: row-reverse;
}
@media screen and (max-width: 768px) {
    .nexmoe-container {
        flex-direction: column !important;
    }
}

.feature .major {
    max-width: 420px;
}
.feature .major > * {
    margin: 1em 0;
}
.feature .major h2 {
    font-size: 2.6rem;
    line-height: 1.1;
    border-bottom: none;
    font-weight: bold;
    margin-bottom: 0;
}
.feature .major p {
    font-size: 1.3rem;
    line-height: 2rem;
    white-space: pre-line;
}
.feature .picture {
    max-width: 580px;
    max-height: 560px;
    display: flex;
    align-items: center;
}
.feature .picture > * {
    width: 100%;
    box-shadow: 0 0 12px rgb(0 0 0 / 20%);
    border-radius: 8px;
}
</style>
