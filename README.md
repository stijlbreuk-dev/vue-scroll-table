# Vue Scroll Table

<p align="center">
  <img src="https://raw.githubusercontent.com/stijlbreuk/vue-scroll-table/master/example/images/vue-scroll-table-basic-example.png" alt="Example"/>
</p>

<p align="center">

<a href="https://www.npmjs.com/package/vue-scroll-table">
    <img src="https://img.shields.io/npm/v/vue-scroll-table.svg" alt="Version"/>
</a>
<a href="https://www.npmjs.com/package/vue-scroll-table">
    <img src="https://img.shields.io/npm/dt/vue-scroll-table.svg" alt="Downloads"/>
</a>
<a href="https://www.npmjs.com/package/vue-scroll-table">
    <img src="https://img.shields.io/npm/l/vue-scroll-table.svg" alt="License"/>
</a>

</p>

<p align="center">
A Vue table component with fully customizable cells (using scoped slots), a sticky first column, horizontal scrolling and pagination.</p>

# Demo
## Basic
<a href="https://codesandbox.io/s/j71mok5xr3">
  <img alt="Edit Vue Scroll Table basic example" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

# Installation

```
npm install --save vue-scroll-table
```

# Usage

ES6 modules, we recommend checking out the CodeSandbox example!
```HTML
<template>
  <div id="app">
    <scroll-table :headers="headers"
                  :data="rows"
                  :hasScroll="true"
                  :styles="styles"
                  :classes="classes">
      <template slot="first name"
                slot-scope="{ row, header, index }">
        <img :src="row[avatarUrlColumnIndex]" />
        <span>
          {{ row[index] }}
        </span>
      </template>
      <template slot="favorite color"
                slot-scope="{ row, index }">
        <svg width="20"
             height="20">
          <rect width="20"
                height="20"
                :style="`fill:${row[index]};`"></rect>
        </svg>
      </template>
    </scroll-table>
  </div>
</template>
<script>
import ScrollTable from "vue-scroll-table";

const data = {
  headers: [
    {
      "text": "First name",
      "sortable": true,
      "width": 250
    },
    {
      "text": "Last name",
      "sortable": true,
      "width": 250
    },
    {
      "text": "Favorite color",
      "sortable": false,
      "width": 160
    },
    {
      "text": "Email",
      "sortable": true,
      "width": 250
    },
    {
      "text": "Gender",
      "sortable": true,
      "width": 160
    },
    {
      "text": "Time zone",
      "sortable": true,
      "width": 250
    },
    {
      "text": "Country",
      "sortable": true,
      "width": 250
    },
    {
      "text": "Company name",
      "sortable": true,
      "width": 250
    },
    {
      "text": "University",
      "sortable": true,
      "width": 250
    },
    {
      "text": "Favorite movie",
      "sortable": true,
      "width": 250
    },
    {
      "text": "Avatar url",
      "sortable": true,
      "width": 250
    }
  ],
  rows: [
    [
      'Clementia',
      'Beresford',
      '#c7b',
      'cberesford0@prweb.com',
      'Female',
      'America/Guatemala',
      'Guatemala',
      'Airbnb',
      'Centro Universitario de Occidente',
      'Brain Dead',
      'https://robohash.org/nihilsuscipitpossimus.png?size=50x50&set=set1'
    ],
    [
      'Joaquin',
      'Shoebotham',
      '#840',
      'jshoebotham1@ocn.ne.jp',
      'Male',
      'Asia/Yekaterinburg',
      'Russia',
      'Airbnb',
      'Nizhny Novgorod State Architectural - Building University',
      'Afterburn',
      'https://robohash.org/molestiaequaeratdolor.bmp?size=50x50&set=set1'
    ],
    [
      'Otes',
      'Cheng',
      '#aa7',
      'ocheng2@about.me',
      'Male',
      'Africa/Johannesburg',
      'South Africa',
      'Airbnb',
      'Walter Sisulu University for Technology and Science',
      'Dead Man',
      'https://robohash.org/estveritatisnon.png?size=50x50&set=set1'
    ],
    [
      'Sharyl',
      'Muskett',
      '#686',
      'smuskett3@360.cn',
      'Female',
      'America/Mexico_City',
      'Mexico',
      'Amazon',
      'Instituto Tecnologico de Minatitlan',
      'Dear Me',
      'https://robohash.org/quasvoluptatespossimus.jpg?size=50x50&set=set1'
    ],
    [
      'Gwenore',
      'Ruspine',
      '#d96',
      'gruspine4@ycombinator.com',
      'Female',
      'America/New_York',
      'United States',
      'Airbnb',
      'University of Southern Maine',
      'Miracle in Milan (Miracolo a Milano)',
      'https://robohash.org/eligendimodinam.bmp?size=50x50&set=set1'
    ]
  ]
}

export default {
  name: "App",
  components: {
    ScrollTable
  },
  data() {
    return {
      avatarUrlColumnIndex: 10,
      headers: data.headers,
      rows: data.rows,
      styles: {},
      classes: {
        tableContainer: ["align-text"],
        sticky: {
          container: ["sticky-column"],
          tableHeader: ["header-padding"],
          tableData: ["table-cell"]
        },
        scroll: {
          tableHeader: ["header-padding"],
          tableData: ["table-cell"]
        }
      }
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
```

CommonJS
```JavaScript
const VueScrollTable = require('vue-scroll-table');
```

In a script tag, this loads the component using the global Vue instance.

```HTML
<script src="https://unpkg.com/vue-scroll-table"></script>
```

# Properties
| Property      | Description          | Type                       | Default       | Example                   |
| ------------- | -------------------- | -------------------------- | ------------- | ------------------------- |
| headers | The headers (or columns) for your table. | EXPECTED PROPERTY DATATYPE | DEFAULT VALUE | USAGE LIKE (:width="400") |

# Events
| Event        | Description         | Event parameters                               |
| ------------ | ------------------- | ---------------------------------------------- |
| [EVENT NAME] | [EVENT DESCRIPTION] | [EVENT PARAMETER NAME]: Datatype (description) |

# Slots

Slots can be used to customize cells of a specific column. A use case for slots can be seen in de basic CodePen example where slots are used to display an avatar for in the 'first name' column of a person.

The name of a slot should correspond with the lowercase text of one of the table headers.

## Slot scope
| Property             | Description        | Type              |
| -------------------- | ------------------ | ----------------- |
| [Slot property name] | [Slot description] | [Slot value type] |


# Contributing

Checkout [GitHub issues](https://github.com/stijlbreuk/vue-scroll-table/issues) for any issues we need some help with.

```bash
# Serve with hot reload (default at localhost:8080)
vue serve --open ./example/App.vue

# Build all variants
npm run build
```

# License
[MIT](https://github.com/stijlbreuk/vue-scroll-table/blob/master/LICENSE)