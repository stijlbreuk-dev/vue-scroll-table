import deepmerge from 'deepmerge';

const DEFAULT_CLASSES = {
    pagination: {
        container: [],
        limit: {
            container: [],
            dropdown: []
        },
        links: {
            container: [],
            buttons: []
        }
    },
    tableContainer: [],
    sticky: {
        container: [],
        table: [],
        tableHeader: [],
        tableRow: [],
        tableData: []
    },
    scroll: {
        container: [],
        table: [],
        tableHeader: [],
        tableRow: [],
        tableData: []
    },
    sortButtons: {
        button: [],
        active: []
    }
};

const DEFAULT_STYLES = {
    pagination: {
        container: {},
        limit: {
            container: {},
            dropdown: {}
        },
        links: {
            container: {},
            buttons: {}
        }
    },
    tableContainer: {},
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

export function mergeDefaultClasses(classes) {
  return deepmerge(DEFAULT_CLASSES, classes);
}

export function mergeDefaultStyle(style) {
  return deepmerge(DEFAULT_STYLES, style);
}
