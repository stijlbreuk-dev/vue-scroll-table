<template>
    <table :class="[...classes.table]"
           :style="styles.table">
        <thead>
            <tr>
                <th v-for="(header, i) in headers"
                    :key="`scroll-table-part-header-${i}`"
                    @click="onHeaderClick($event, i, header.sortable)"
                    :class="[...classes.tableHeader]"
                    :style="Object.assign({ 'min-width': `${header.width}px`, 'width': `${header.width}px`, 'cursor': header.sortable ? 'pointer' : 'default' }, styles.tableHeader)">
                    {{ header.text }}
                    <sort-icon v-if="header.sortable"
                               :classes="{ button: classes.button, active: classes.active}"
                               :styles="{ button: styles.button, active: styles.active }"
                               :direction="direction" />
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, i) in data"
                :key="`scroll-table-part-row-${i}`"
                :class="[...classes.tableRow]"
                :style="styles.tableRow">
                <template v-for="(header, i) in headers">
                    <td v-if="typeof $scopedSlots[header.text.toLowerCase()] !== 'undefined'"
                        :key="`scroll-table-part-row-item-${i}`"
                        :class="[...classes.tableData]"
                        :style="styles.tableData">
                        <slot :name="header.text.toLowerCase()"
                              :header="header"
                              :index="i"
                              :data="row[i]"
                              :row="row"></slot>
                    </td>
                    <td v-else
                        :key="`scroll-table-part-row-item-${i}`"
                        :class="[...classes.tableData]"
                        :style="styles.tableData">
                        {{ getCellDisplayValue(row[i]) }}
                    </td>
                </template>
            </tr>
        </tbody>
    </table>
</template>

<script>
import SortIcon from './SortIcon.vue';

export default {
    name: 'table-part',
    props: ['data', 'headers', 'direction', 'classes', 'styles'],
    components: {
        SortIcon
    },
    methods: {
        onHeaderClick($event, index, sortable) {
            if (sortable) {
                this.$emit('sort', index);
            }
        },
        getCellDisplayValue(cellData) {
            if (typeof cellData === 'object') {
                if (Object.keys(cellData).includes('value')) {
                    return cellData.value;
                }
                console.log(
                    "Cell data object should have a 'value' property, cell data:",
                    cellData
                );
                return cellData;
            }
            return cellData;
        }
    }
};
</script>

<style lang="scss" scoped>
    $border-radius: 10px;
    $border-color: #ddd;

    th {
        cursor: pointer;
        padding: 20px;
        border-right: 1px white solid;
    }

    table {
        border: 1px solid $border-color;
        border-collapse: separate;
        border-left: 0;
        border-right: 0;
        border-radius: $border-radius;
        border-spacing: 0px;
        margin-bottom: 0px;
    }

    th,
    td {
        &:first-child {
            border-left: 1px solid $border-color;
        }
        &:last-child {
            border-right: 1px solid $border-color;
        }
    }

    thead:first-child tr:first-child th:first-child,
    tbody:first-child tr:first-child td:first-child {
        border-radius: $border-radius 0 0 0;
    }

    thead:last-child tr:last-child th:first-child,
    tbody:last-child tr:last-child td:first-child {
        border-radius: 0 0 0 $border-radius;
    }

    th:last-child {
        border-radius: 0 $border-radius 0 0;
    }

    tr:last-child {
        td:last-child {
            border-radius: 0 0 $border-radius 0;
        }
    }
</style>
