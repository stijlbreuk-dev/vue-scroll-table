<template>
    <div id="app">
        <h1>Vue Scroll Table</h1>
        <p>A Vue table component with fully customizable cells (using scoped slots), a sticky first column, horizontal scrolling and pagination.</p>
        <scroll-table :headers="headers"
                      :data="rows"
                      :hasScroll="true"
                      :styles="styles"
                      :classes="classes"
                      :translations="{ limit: 'per page'}">
            <template slot="first name"
                      slot-scope="{ data }">
                <img :src="data.attributes.avatarUrl" />
                <span>
                    {{ data.value }}
                </span>
            </template>
            <template slot="favorite color"
                      slot-scope="{ data }">
                <svg width="20"
                     height="20">
                    <rect width="20"
                          height="20"
                          :style="`fill:${data};`"></rect>
                </svg>
            </template>
        </scroll-table>
    </div>
</template>
<script>
import ScrollTable from '../src/ScrollTable.vue';
import data from './assets/data.json';

export default {
    name: 'App',
    components: {
        ScrollTable
    },
    data() {
        return {
            avatarUrlColumnIndex: 10,
            headers: data.headers,
            rows: data.rows,
            styles: {
                sticky: {
                    tableHeader: {
                        'font-style': 'italic'
                    }
                }
            },
            classes: {
                tableContainer: ['align-text'],
                sticky: {
                    container: ['sticky-column'],
                    tableHeader: ['header-padding'],
                    tableData: ['table-cell']
                },
                scroll: {
                    tableHeader: ['header-padding'],
                    tableData: ['table-cell']
                }
            }
        };
    }
};
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .vst_table-container.align-text {
        text-align: left;
    }

    .vst_table-container .header-padding {
        padding: 2rem 1.5rem 1.5rem 1.5rem;
    }

    .vst_table-container .table-cell {
        padding: 0.5rem 2rem;
        vertical-align: middle;

        & img {
            vertical-align: middle;
        }
    }

    .vst_table-container .sticky-column {
        box-shadow: 10px 0px 10px -12px black;
    }
</style>
