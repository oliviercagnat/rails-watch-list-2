// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

// if it loads every channels, should I import my function?
import { myFunction } from "./controllers/sticky_navbar"
myFunction()
initSortable()
