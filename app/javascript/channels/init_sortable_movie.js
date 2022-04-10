import Sortable from "sortablejs"

console.log("Hello from init_sortable_movie.js")

const movie = document.querySelector("#sortable-movie")

const initSortableMovie = () => {
  Sortable.create(movie, {
    ghostClass: "ghost",
    animation: 150,
  })
}

export { initSortableMovie }
