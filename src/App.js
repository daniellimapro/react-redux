import { Provider } from "react-redux";
import Catalog from "./components/Catalog";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
};

export default App;
