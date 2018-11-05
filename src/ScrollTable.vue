<template>
    <div v-if="data">
        <div class="vst_pagination a_margin-bottom-20">
            <div class="vst_pagination_filters a_margin-right-20">
                <select v-model="limit"
                        class="v_transparent">
                    <option v-for="(limit, i) in limits"
                            :key="`scroll-table-limit-${i}`"
                            :value="limit">{{limit}} per page</option>
                </select>
            </div>
            <div class="vst_pagination_links">
                <button v-for="i in pages"
                        :key="`scroll-table-pagination-link-${i}`"
                        :class="{s_active: i == page }"
                        @click="paginate(i)">{{i}}</button>
            </div>
        </div>
        <div class="vst_table"
             :class="{'v_has-scroll': hasScroll}">
            <div class="vst_table-overlay"
                 v-if="hasScroll"
                 :style="{'max-width': `${headers[0].width}`}">
                <table-part ref="overlay"
                            @sort="sortBy($event)"
                            :headers="headers"
                            :data="limitedData"
                            :direction="direction">

                    <!-- Pass down all slots and scoped slots to child -->
                    <slot v-for="slot in Object.keys($slots)"
                          :name="slot"
                          :slot="slot" />
                    <template v-for="slot in Object.keys($scopedSlots)"
                              :slot="slot"
                              slot-scope="scope">
                        <slot :name="slot"
                              v-bind="scope" />
                    </template>
                </table-part>
            </div>
            <div class="vst_table-scroll">
                <table-part ref="scroll"
                            @sort="sortBy($event)"
                            :headers="headers"
                            :data="limitedData"
                            :direction="direction">

                    <!-- Pass down al slots and scoped slots to child -->
                    <slot v-for="slot in Object.keys($slots)"
                          :name="slot"
                          :slot="slot" />
                    <template v-for="slot in Object.keys($scopedSlots)"
                              :slot="slot"
                              slot-scope="scope">
                        <slot :name="slot"
                              v-bind="scope" />
                    </template>
                </table-part>
            </div>
        </div>
        <loader v-if="!data"
                :loading="loading"></loader>
    </div>
</template>

<script>
import TablePart from './elements/TablePart';
import Loader from './elements/Loader';

export default {
    name: 'scroll-table',
    mounted() {
        if (this.limits.length) {
            this.limit = this.limits[0];
        }
        if (this.hasScroll) {
            this.handleResize();
            window.addEventListener('resize', this.handleResize);
        }
    },
    beforeDestroy: function() {
        if (this.hasScroll) {
            window.removeEventListener('resize', this.handleResize);
        }
    },
    props: {
        limits: {
            default: function defaultValue() {
                return [25, 50, 100];
            }
        },
        hasScroll: {
            default: false
        },
        data: {
            default() {
                return [];
            }
        },
        headers: {
            default() {
                return [];
            }
        }
    },
    watch: {
        limit() {
            this.page = 1;
        }
    },
    data() {
        return {
            loading: false,
            limit: 0,
            page: 1,
            sortKey: 'naam',
            direction: 'descending',
            overlayTableWidth: this.headers[0].width
        };
    },
    computed: {
        limitedData() {
            const vue = this;
            const limitedData = [...this.data]
                .sort((a, b) => {
                    if (a[this.sortKey] > b[this.sortKey])
                        return this.direction === 'descending' ? -1 : 1;
                    if (a[this.sortKey] < b[this.sortKey])
                        return this.direction === 'descending' ? 1 : -1;
                    return 0;
                })
                .filter((row, i) => {
                    if (
                        i >= (vue.page - 1) * vue.limit &&
                        i < vue.page * vue.limit
                    )
                        return true;
                    return false;
                });

            if (!this.limit) return this.data || [];
            return limitedData;
        },
        pages() {
            if (!this.data.length || !this.limit) return 0;
            const pages = Math.ceil(this.data.length / this.limit);
            return pages;
        }
    },
    methods: {
        paginate(num) {
            this.page = num;
        },
        sortBy(key) {
            this.direction =
                this.direction === 'descending' ? 'ascending' : 'descending';
            this.sortKey = key;
        },
        handleResize() {
            this.$refs.overlay.$el.style.width = `${
                this.$refs.scroll.$el.offsetWidth
            }px`;
        }
    },
    components: {
        TablePart,
        Loader
    }
};
</script>

<style lang="scss">
    @import './styles/app.scss';

    * {
        box-sizing: border-box;
    }

    .vst_table {
        width: 100%;
        overflow-x: scroll;
    }

    .vst_table-overlay {
        background-color: white;
        position: absolute;
        overflow: hidden;
        border-right: 1px solid red;
        &.v_has-scroll {
            display: none;
        }
        th,
        td {
            min-width: 140px;
            white-space: nowrap;
        }
    }

    .vst_table-scroll {
    }

    .vst_loader {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: calc(100% - 42px);
    }
</style>
