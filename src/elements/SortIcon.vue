<template>
    <button class="vst_sort-btn"
            :class="[...classes.button]"
            :style="styles.button">
        <span :class="this.direction === 'ascending' ? activeClasses : {}"
              :style="this.direction === 'ascending' ? activeStyle : {}">
            ▲
        </span>
        <span :class="this.direction === 'descending' ? activeClasses : {}"
              :style="this.direction === 'descending' ? activeStyle : {}">
            ▼
        </span>
    </button>
</template>

<script>
export default {
    props: ['classes', 'styles', 'direction'],
    name: 'sort-icon',
    watch: {
        'classes.active': {
            immediate: true,
            handler: function(newActiveClasses) {
                const activateClasses = (activeClasses, currentClass) => ({
                    ...activeClasses,
                    [currentClass]: true
                });

                this.activeClasses = {
                    ...this.defaultActiveClasses.reduce(activateClasses, {}),
                    ...newActiveClasses.reduce(activateClasses, {})
                };
            }
        },
        'styles.active': {
            immediate: true,
            handler: function(newActiveStyles) {
                this.activeStyle = {
                    ...this.defaultActiveStyle,
                    ...newActiveStyles
                };
            }
        }
    },
    data() {
        return {
            defaultActiveClasses: ['s_active'],
            defaultActiveStyle: {},
            activeClasses: {},
            activeStyle: {}
        };
    }
};
</script>
<style lang="scss" scoped>
    // Opacity & z-index fix for scroll-table sort buttons
    .vst_table-scroll .vst_sort-btn {
        position: relative;
        z-index: 0;
    }

    span {
        opacity: 0.5;
        &.s_active {
            opacity: 1;
        }
    }
</style>
