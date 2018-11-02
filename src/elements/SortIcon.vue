<template>
    <button class="vst_sort-btn">
        <span :class="{ s_active: direction === 'ascending' }">
            ▲
        </span>
        <span :class="{ s_active: direction === 'descending' }">
            ▼
        </span>
    </button>
</template>

<script>
export default {
    props: ['direction'],
    name: 'sort-icon'
};
</script>
<style lang="scss" scoped>
    // Opacity & z-index fix for scroll-table sort buttons
    .vst_table-scroll .vst_sort-btn  {
        position: relative;
        z-index: -1;
    }

    span {
        opacity: 0.5;
        &.s_active {
            opacity: 1;
        }
    }
</style>
