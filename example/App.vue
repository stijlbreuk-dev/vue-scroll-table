<template>
    <div>
        <scroll-table :headers="headers" :data="rows">
        </scroll-table>
    </div>
</template>
<script>
import ScrollTable from '../src/ScrollTable.vue'
export default {
    data() {
        return {
            headers: [
                {
                    text: 'Name',
                    sortable: true
                },
                {
                    text: 'Occupation',
                    sortable: true
                },
                {
                    text: 'Age',
                    sortable: true
                }
            ],
            rows: [
                ['Aron', 'Front-end Developer', '37'],
                ['Werner', 'Strategist', '32'],
                ['Nino', 'Back-end Developer', '22'],
                ['Jeroen', 'Front-end Developer', '31'],
                ['Paul', 'Designer', '27'],
            ]
        }
    },
    components: {
        ScrollTable
    }
}
</script>
