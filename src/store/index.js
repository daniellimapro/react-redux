import { createStore } from "redux";

const store = createStore(() => {
  return {
    id: 3,
    name: "Daniel",
    email: "daniel@gmail.com",
  };
});

export default store;
