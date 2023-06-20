<template>
	<div
		class="vst_pagination_links"
		:class="[...paginationClasses.links.container]"
		:style="paginationStyles.links.container">

		<button
      v-for="(button, index) in paginationButtons"
      :key="`scroll-table-pagination-link-${index}`"
      :class="[{ s_active: button.current }, [...paginationClasses.links.buttons]]"
      :style="paginationStyles.links.buttons"
      :disabled="button.disabled"
      @click="onClick(button.buttonType, button.page)"
      >
      <template v-if="button.buttonType === 'LEFT'">
        &lt;
      </template>

      <template v-else-if="button.buttonType === 'RIGHT'" >
        &gt;
      </template>

      <template v-else-if="button.buttonType === 'ELLIPSIS'" >
        ...
      </template>

      <template v-else>
      {{ button.page }}
      </template>
    </button>

  </div>
</template>

<script>
import { mergeDefaultClasses, mergeDefaultStyle } from '../config/defaults';
import { getPaginationButtons } from '../utils/pagination';

export default {
  data() {
    return {
      page: 1
    };
  },

  props: {
    paginationStyles: {
      type: Object,
      default() {
        return mergeDefaultStyle({});
      }
    },
    paginationClasses: {
      type: Object,
      default() {
        return mergeDefaultClasses({});
      }
    },

    pages: {
      type: Number,
      default() {
        return 1;
      }
    }
  },
  methods: {
    paginate(num) {
      this.page = num;
      this.$emit('on-paginated', num);
    },
    onClick(buttonType, index) {
      const actions = {
        LEFT: () => this.paginate(this.page - 1),
        RIGHT: () => this.paginate(this.page + 1),
        ELLIPSIS: () => {
          /* do nothing */
        },
        default: () => this.paginate(index)
      };

      return (actions[buttonType] || actions.default)();
    }
  },
  computed: {
    paginationButtons() {
      return getPaginationButtons(this.pages, this.page);
    }
  }
};
</script>

<style lang="scss">
.s_active {
  background-color: #ccc;
}
</style>
