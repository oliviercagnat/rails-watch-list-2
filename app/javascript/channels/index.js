// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

console.log("Hello from index.js")

// import { initSortableList } from "./init_sortable_list"
// initSortableList()

// import { initSortableMovie } from "./init_sortable_movie"
// initSortableMovie()
