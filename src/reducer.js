// add code snippets from README
let state = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
reducer({ count: 0 }, { type: "counter/increment" });

function dispatch(action) {
  state = reducer(state, action);
  render();
}

function render() {
  let container = document.getElementById("container");
  container.textContent = state.count;
}

dispatch({ type: "@@INIT" });

let button = document.getElementById("button");

button.addEventListener("click", () => {
  dispatch({ type: "counter/increment" });
});
