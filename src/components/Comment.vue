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
        <figure
            v-for="item in feature.items"
            :key="item"
            class="bg-vp-c-bg mb-8 break-inside-avoid rounded-lg p-8 shadow-md"
        >
            <svg
                class="h-8 text-gray-500"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                ></path>
            </svg>
            <blockquote class="mt-4 text-lg leading-snug">
                {{ item.comment }}
            </blockquote>
            <figcaption class="mt-4 text-base">{{ item.author }}</figcaption>
        </figure>
    </div>
</template>

<style scoped>
.xiaoshu-comment {
    @apply mx-auto w-full md:grid md:grid-cols-3 md:gap-8 md:grid-cols-1;
}
</style>
