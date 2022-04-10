import Sortable from "sortablejs"

console.log("Hello from init_sortable_list.js")

const list = document.querySelector("#sortable-list")

const initSortableList = () => {
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 150,
  })
}

export { initSortableList }
