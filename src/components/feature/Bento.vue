<template>
    <div class="bento grid auto-rows-[240px] grid-cols-3 gap-6">
        <div
            v-for="i in 7"
            :key="i"
            :class="[`l-card item`, i === 4 || i === 7 ? 'col-span-2' : '']"
        >
            <div class="item-title">
                {{ i }}
            </div>
            <div class=" color-gray">
                {{ i }}
            </div>
        </div>
    </div>
</template>

<style scoped>

.item {
    @apply row-span-1 p-6;
}
.item-title {
    @apply font-bold text-base;
}
</style>
