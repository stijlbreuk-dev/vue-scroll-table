<template>
  <div v-if="data"
       class="vst_table-component-container">
    <div class="vst_pagination-container a_margin-bottom-20"
         :class="[...mergedClasses.pagination.container]"
         :style="mergedStyles.pagination.container">
      <div class="vst_pagination_limit a_margin-right-20"
           :class="[...mergedClasses.pagination.limit.container]"
           :style="mergedStyles.pagination.limit.container">
        <select v-model="limit"
                class="v_transparent"
                :class="[...mergedClasses.pagination.limit.dropdown]"
                :style="mergedStyles.pagination.limit.dropdown">
          <option v-for="(limit, i) in limits"
                  :key="`scroll-table-limit-${i}`"
                  :value="limit">{{limit}} {{ translations.limit }}</option>
        </select>
      </div>
      <div class="vst_pagination_links"
           :class="[...mergedClasses.pagination.links.container]"
           :style="mergedStyles.pagination.links.container">
        <button v-for="i in pages"
                :key="`scroll-table-pagination-link-${i}`"
                :class="[{s_active: i == page }, [...mergedClasses.pagination.links.buttons]]"
                :style="mergedStyles.pagination.links.buttons"
                @click="paginate(i)">{{i}}</button>
      </div>
    </div>
    <div class='vst_table-container'
         :class="[{'v_has-scroll': hasScroll}, ...mergedClasses.tableContainer]"
         :style="mergedStyles.tableContainer">
      <div class="vst_table-overlay"
           :class="[...mergedClasses.sticky.container]"
           v-if="hasScroll"
           :style="Object.assign({'width': `${headers[0].width}px`}, mergedStyles.sticky.container)">
        <table-part ref="overlay"
                    @sort="sortBy($event)"
                    :classes="Object.assign(mergedClasses.sticky, mergedClasses.sortButtons)"
                    :styles="Object.assign(mergedStyles.sticky, mergedStyles.sortButtons)"
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
      <div class="vst_table-scroll"
           :class="[...mergedClasses.scroll.container]"
           :style="mergedStyles.scroll.container">
        <table-part ref="scroll"
                    @sort="sortBy($event)"
                    :classes="Object.assign(mergedClasses.scroll, mergedClasses.sortButtons)"
                    :styles="Object.assign(mergedStyles.scroll, mergedStyles.sortButtons)"
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
  import TablePart from './elements/TablePart.vue';
  import Loader from './elements/Loader.vue';

  import { mergeDefaultClasses, mergeDefaultStyle } from './config/defaults.js';

  export default {
    name: 'scroll-table',
    mounted() {
      if (this.limits.length) {
        this.limit = this.limits[0];
      }
      if (this.hasScroll) {
        window.addEventListener('resize', this.handleResize);
      }
      this.$nextTick(this.handleResize);
    },
    beforeDestroy: function() {
      if (this.hasScroll) {
        window.removeEventListener('resize', this.handleResize);
      }
    },
    props: {
      limits: {
        type: Array,
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
      },
      styles: {
        type: Object,
        default() {
          return mergeDefaultStyle({});
        }
      },
      classes: {
        type: Object,
        default() {
          return mergeDefaultClasses({});
        }
      },
      translations: {
        type: Object,
        default() {
          return {
            limit: 'per page'
          };
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
        mergedClasses: mergeDefaultClasses(this.classes),
        mergedStyles: mergeDefaultStyle(this.styles)
      };
    },
    computed: {
      limitedData() {
        const vue = this;

        const sortCallback = (() => {
          if (this.data.length === 0) {
            return (a, b) => {
              return 0;
            };
          }

          if (typeof this.data[0][this.sortKey] === 'object') {
            // Sort callback for row array with data objects
            return (a, b) => {
              if (a[this.sortKey].value > b[this.sortKey].value)
                return this.direction === 'descending' ? -1 : 1;
              if (a[this.sortKey].value < b[this.sortKey].value)
                return this.direction === 'descending' ? 1 : -1;
              return 0;
            };
          }
          // Sort callback for row array with simple string values
          return (a, b) => {
            if (a[this.sortKey] > b[this.sortKey])
              return this.direction === 'descending' ? -1 : 1;
            if (a[this.sortKey] < b[this.sortKey])
              return this.direction === 'descending' ? 1 : -1;
            return 0;
          };
        })();

        const limitedData = [...this.data].sort(sortCallback).filter((row, i) => {
          if (i >= (vue.page - 1) * vue.limit && i < vue.page * vue.limit)
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
        if (!this.hasScroll) {
            return;
        }
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

  .vst_table-container {
    width: 100%;
    position: relative;
    &.v_has-scroll {
      .vst_table-overlay {
        height: calc(100% - 16px);
      }
    }
  }

  .vst_table-overlay {
    height: 100%;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
    &.v_has-scroll {
      display: none;
    }
  }

  .vst_table-scroll {
    overflow-x: auto;
    table {
      width: 100%;
    }
  }

  .vst_loader {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(100% - 42px);
  }
</style>
