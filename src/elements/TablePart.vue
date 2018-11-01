<template>
    <table>
        <thead>
            <tr>
                <th v-for="(header, i) in headers"
                    :key="`scroll-table-part-header-${i}`"
                    @click="$emit('sort', i)">
                    {{ header.text }}
                    <sort-icon v-if="header.sortable" />
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, i) in data"
                :key="`scroll-table-part-row-${i}`">
                <td v-for="(item, i) in row"
                    :key="`scroll-table-part-row-item-${i}`">
                    {{ item }}
                </td>
                <!-- <td>

                    <div class="vst_avatar v_smallest">
                        <figure class="vst_avatar_image" :style="{'background-image': `url(${ row.foto })`}"></figure>
                        <div class="vst_avatar_name">{{ row.naam }}</div>
                    </div>
                </td> -->
            </tr>
        </tbody>
    </table>
</template>

<script>
import SortIcon from './SortIcon';

export default {
    name: 'table-part',
    props: ['data', 'headers'],
    components: {
        SortIcon
    }
};
</script>

<style lang="scss" scoped>
    $first-column-width: 280px;
    $border-radius: 10px;
    $border-color: #ddd;

    th {
        cursor: pointer;
        padding: 20px !important;
        &:nth-child(1) {
            width: $first-column-width;
        }
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
