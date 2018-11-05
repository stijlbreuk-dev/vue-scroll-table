<template>
    <button class="vst_sort-btn"
            :class="[...classes.button]">
        <span :class="this.direction === 'ascending' ? activeClasses : {}">
            ▲
        </span>
        <span :class="this.direction === 'descending' ? activeClasses : {}">
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
                this.activeClasses = {
                    s_active: true,
                    ...newActiveClasses.reduce(
                        (activeClasses, currentActiveClass) => ({
                            ...activeClasses,
                            [currentActiveClass]: true
                        }),
                        {}
                    )
                };
            }
        }
    },
    data() {
        return {
            activeClasses: {
                s_active: true
            }
        };
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
