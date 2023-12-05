<script setup>
defineProps({
    feature: {
        type: Object,
        require: true
    }
})
</script>
<template>
    <div class="xiaoshu-comment">
        <figure v-for="item in feature.items" :key="item">
            <svg
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                ></path>
            </svg>
            <blockquote>{{ item.comment }}</blockquote>
            <figcaption>{{ item.author }}</figcaption>
        </figure>
    </div>
</template>

<style scoped>
.xiaoshu-comment {
    margin: auto;
    width: 100%;
    columns: 3;
    column-gap: 32px;
}
@media (max-width: 767px) {
    .xiaoshu-comment {
        columns: 1;
    }
}

figure {
    break-inside: avoid;
    margin-bottom: 32px;
    background: var(--vp-c-bg);
    box-shadow:
        0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    padding: 32px;
    border-radius: 1rem;
}
svg {
    height: 2rem;
    color: #9da3af;
}
blockquote {
    font-size: 1.1rem;
    margin-top: 1rem;
    line-height: 1.3;
}
figcaption {
    font-size: 1rem;
    margin-top: 1rem;
}
.progress {
    height: 1px;
    background-color: #000;
    margin-top: 1rem;
}
</style>
