<template>
    <div class="section">
        <div class="header">
            <div class="title">
                <slot name="title"></slot>
            </div>
            <div class="des">
                <slot name="des"></slot>
            </div>
        </div>
        <div class="body">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.section {
    @apply: py-16 overflow-unset;
}

.header {
    @apply: py-16;
}

.title {
    @apply text-3xl font-bold mb-6 md:text-5xl;
}

.des {
    @apply text-base font-normal text-gray-600 md:text-lg;
}

section header.center {
    text-align: center;
}

section.gray {
    background-color: var(--vp-c-bg-soft);
}

section.black {
    background-color: #000;
    color: #f5f5f7;
}

section.background {
    background: url(https://i.dawnlab.me/f0ed50c6739b0092ebefb9d281ed10ee.png);
    background-size: cover;
}

section.background :deep(.card) {
    border: none !important;
}

section.background header {
    color: #fff;
}
</style>
