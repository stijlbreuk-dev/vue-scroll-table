<template>
    <button class="vst_sort-btn"
            :class="[...classes.button]">
        <span :class="getClasses('ascending')">
            ▲
        </span>
        <span :class="getClasses('descending')">
            ▼
        </span>
    </button>
</template>

<script>
export default {
    props: ['classes', 'direction'],
    name: 'sort-icon',
    watch: {
        'classes.active': {
            immediate: true,
            handler: function(newActiveClasses) {
                this.customActiveClasses = newActiveClasses.reduce(
                    (activeClasses, currentActiveClass) => ({
                        ...activeClasses,
                        [currentActiveClass]: true
                    }),
                    {}
                );
            }
        }
    },
    data() {
        return {
            customActiveClasses: {}
        };
    },
    methods: {
        getClasses(direction) {
            if (this.direction === direction) {
                return {
                    s_active: true,
                    ...this.customActiveClasses
                };
            }
            return {};
        }
    }
};
</script>
<style lang="scss" scoped>
    // Opacity & z-index fix for scroll-table sort buttons
    .vst_table-scroll .vst_sort-btn {
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
