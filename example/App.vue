<template>
    <div>
        <scroll-table :headers="headers"
                      :data="rows"
                      :hasScroll="true">
            <template slot="occupation"
                      slot-scope="scope">
                <p v-for="([key, value], index) in Object.entries(scope)"
                   :key="`occupation-entry-${index}`">
                    {{ key }}: {{ value }}
                </p>
            </template>
            <template slot="age"
                      slot-scope="{ row, header, index }">Age {{ row[index] }}</template>
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
                    sortable: true
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
    components: {
        ScrollTable
    }
};
</script>
