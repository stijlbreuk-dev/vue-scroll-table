<template>
    <div>
        <scroll-table :headers="headers"
                      :data="rows"
                      :hasScroll="true"
                      :styles="styles"
                      :classes="classes">
        </scroll-table>
    </div>
</template>
<script>
import ScrollTable from '../src/ScrollTable.vue';
export default {
    data() {
        return {
            headers: [
                {
                    text: 'Name',
                    sortable: true,
                    width: '500px'
                },
                {
                    text: 'Occupation',
                    sortable: true
                },
                {
                    text: 'Age',
                    sortable: true
                },
                {
                    text: 'Age',
                    sortable: true
                },
                {
                    text: 'Age',
                    sortable: true
                },
                {
                    text: 'Age',
                    sortable: true
                },
                {
                    text: 'Age',
                    sortable: true
                }
            ],
            rows: [
                [
                    'Aron',
                    'Front-end Developer',
                    '37',
                    'test',
                    'test',
                    'test',
                    'test'
                ],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27']
            ]
        };
    },
    created() {},
    computed: {
        classes() {
            return {
                pagination: {
                    container: ['pagination-container'],
                    limit: {
                        container: ['limitcontainer'],
                        dropdown: ['limitdropdown']
                    },
                    links: {
                        container: ['linkscontainer'],
                        buttons: ['linkbutton']
                    }
                },
                container: ['tables_container'],
                sticky: {
                    container: ['stickycontainer'],
                    table: ['stickytable'],
                    tableHeader: ['stickytableheader'],
                    tableRow: ['stickytablerow'],
                    tableData: ['stickytabledata']
                },
                scroll: {
                    container: ['scrollcontainer'],
                    table: ['scrolltable'],
                    tableHeader: ['scrolltableheader'],
                    tableRow: ['scrolltablerow'],
                    tableData: ['scrolltabledata']
                },
                sortButtons: {
                    button: ['sortbutton'],
                    active: ['activesortbutton']
                }
            };
        },
        styles() {
            return {
                pagination: {
                    container: {
                        // 'background-color': 'red',
                        // border: '1px solid black'
                    },
                    limit: {
                        container: {
                            // 'background-color': 'red',
                            // border: '1px solid black'
                        },
                        dropdown: {
                            // 'background-color': 'red',
                            // border: '1px solid black'
                        }
                    },
                    links: {
                        container: {
                            'background-color': 'red',
                            border: '1px solid black'
                        },
                        buttons: {
                            color: 'red'
                            // border: '1px solid black'
                        }
                    }
                },
                container: {
                },
                sticky: {
                    container: {},
                    table: {},
                    tableHeader: {},
                    tableRow: {},
                    tableData: {}
                },
                scroll: {
                    container: {},
                    table: {},
                    tableHeader: {},
                    tableRow: {},
                    tableData: {}
                },
                sortButtons: {
                    button: {},
                    active: {}
                }
            };
        }
    },
    components: {
        ScrollTable
    }
};
</script>
