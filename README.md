# Vue Scroll Table

<p align="center">
  <img src="https://raw.githubusercontent.com/stijlbreuk/vue-scroll-table/master/example/images/vue-scroll-table-basic-example.gif" alt="Example"/>
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
    <h1>Vue Scroll Table</h1>
    <p>A Vue table component with fully customizable cells (using scoped slots), a sticky first column, horizontal scrolling and pagination.</p>
    <scroll-table v-if="headers && rows"
                  :headers="headers"
                  :data="rows"
                  :hasScroll="true"
                  :styles="styles"
                  :classes="classes">
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
  import ScrollTable from "vue-scroll-table";

  const getData = () => {
    // Or load your own data.
    return fetch(
      'https://raw.githubusercontent.com/stijlbreuk/vue-scroll-table/master/example/assets/data.json'
    );
  };

  export default {
    name: 'App',
    components: {
      ScrollTable
    },
    created() {
      getData()
        .then(response => response.json())
        .then(data => {
          this.headers = data.headers;
          this.rows = data.rows;
        });
    },
    data() {
      return {
        headers: null,
        rows: null,
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
| Property     | Description                                                                                                             | Type                                                    | Default        | Example                                                                                    |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------ |
| limits       | The amount of rows a user can choose to show at once.                                                                   | Number array                                            | [ 25, 50, 100] | :limits="[ 5, 10, 25]"                                                                     |
| hasScroll    | Whether or not the table will be scrollable                                                                             | Boolean                                                 | false          | :hasScroll="false"                                                                         |
| headers      | The headers (or columns) for your table.                                                                                | [Header object](#headers) array                        | []             | :headers="headers" <br/> :headers="[{ text: 'First name', sortable: true, width: 250 }]"   |
| data         | The data (or rows) that should be displayed in your table.                                                              | Array of nested [Data objects](#data) or String arrays | []             | :data="data" <br/> :data="[{ value: 'Jane', attributes: { avatarUrl: 'url-to-avatar' } }]" |
| classes      | The CSS classes you want to apply to specific elements in the table.                                                    | [Vue Scroll Table classes object](#classes)            | {}             | :classes="classes"                                                                         |
| styles       | The CSS styles you want to apply to specific elements in the table.                                                     | [Vue Scroll Table Style object](#styles)               | {}             | :styles="styles"                                                                           |
| translations | Translations for certain labels in the table. The only label that exists right now is the label in the 'limit' dropdown | Object                                                  | { limit:  'per page' }     | :translations="{ limit: 'per pagina' }"                                                                           |

## headers
Properties of a header object.

| Property | Description                                              | Type    | Default | Example                |
| -------- | -------------------------------------------------------- | ------- | ------- | ---------------------- |
| text     | The name of the column which is shown in a table header. | String  | -       | { text: 'First name' } |
| sortable | Whether or not a column is sortable                      | Boolean | false   | { sortable: true }     |
| width    | The minimum width of a column                            | Number  | -       | { width: 250 }         |

## data
A data entry (or row) can consist of an array containing a value for every column or can consist of a so called data object.

Properties of a data object

| Property   | Description                                                                                                                    | Type | Default | Example                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ | ---- | ------- | ---------------------------------------------- |
| value      | The value which is displayed.                                                                                                  | Any  | -       | { value: 'Jane Doe' }                          |
| attributes | An object in which custom data for a cell can be saved, useful when using slots to customize cells of a specific table column. | Any  | -       | { attributes: { avatarUrl: 'url-to-avatar' } } |

## Classes & styles
The 'classes' and 'styles' objects can be used to change the look of the Vue Scroll Table. Both objects allow the same properties.

### classes
In the classes object, CSS classes for different parts of the table can be specified. Using the classes object is recommended when you want to apply your own static styling to the table or when you want to override the basic styling that is applied by default.

Every property accepts an array of CSS class names (without a dot).

```JavaScript
const classes = {
  // Pagination classes
  pagination: {
      container: [],
      limit: {
          container: [],
          dropdown: []
      },
      // Numbered pagination buttons
      links: {
          container: [],
          buttons: []
      }
  },
  // The container element in which both the 'sticky' column table and the underlying 'scroll' table can be found
  tableContainer: ["align-text"],
  sticky: {
      container: ["sticky-column"],
      table: [],
      tableHeader: ["header-padding"],
      tableRow: [],
      tableData: ["table-cell"]
  },
  scroll: {
      container: [],
      table: [],
      tableHeader: ["header-padding"],
      tableRow: [],
      tableData: ["table-cell"]
  },
  // Classes for the sort buttons which can be found in the table headers
  sortButtons: {
      button: [],
      active: []
  }
}
```

### styles
In the styles object, CSS styles for different parts of the table can be specified. You might want to use the styles object when you want dynamically / reactively change the style of (a part) of the table.

Every property accepts an object which can contain any CSS style rule.

```JavaScript
const styles = {
  // Pagination classes
  pagination: {
      container: {},
      limit: {
          container: {},
          dropdown: {}
      },
      // Numbered pagination buttons
      links: {
          container: {},
          buttons: {}
      }
  },
  // The container element in which both the 'sticky' column table and the underlying 'scroll' table can be found
  tableContainer: {},
  sticky: {
      container: {},
      table: {},
      tableHeader: {
        'font-style': 'italic'
      },
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
  // Classes for the sort buttons which can be found in the table headers
  sortButtons: {
      button: {},
      active: {}
  }
}
```

# Events
The Vue Scroll Table doesn't emit any events.

# Slots

Slots can be used to customize cells of a specific column. A use case for slots can be seen in de basic CodePen example where slots are used to display an avatar for in the 'first name' column of a person.

The name of a slot should correspond with the lowercase text of one of the table headers.

Slots can be extremely powerful when used in combination with data objects. As you can see in the example, a custom property called 'avatarUrl' is present under 'attributes' which is exposed through the 'slot-scope' so it can be referenced in your template.

```HTML
<template slot="first name"
          slot-scope="{ data, index, row, header }">
  <!-- Data is the data object to which you can add custom properties or it contains the plain value that will be displayed in the table cell -->
  <img :src="data.attributes.avatarUrl"/>
  <span>
    {{ data.value }} <!-- Regular display value, which is someone's first name in our example -->
  </span>
</template>
```

## Slot scope
| Property | Description                                                          | Type                                    |
| -------- | -------------------------------------------------------------------- | --------------------------------------- |
| data     | The data object or a string containing the value for the table cell. | [Data object](#data) or string         |
| index    | The index of the column the table cell belongs to.                   | Number                                  |
| row      | The full row object the table cell belongs to.                       | Array [Data objects](#data) or strings |
| header   | The header object of the column you wanted to customize cells for.   | [Header object](#headers)              |

For more info about scoped slots, check out [Vue's documentation](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots).

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

<p>Created by <a href="https://stijlbreuk.nl" target="_blank">Stijlbreuk</a></p>