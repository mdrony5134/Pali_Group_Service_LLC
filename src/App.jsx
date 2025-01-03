import { Provider } from "react-redux";
import "./App.css";
import Layout from "./Layouts/Layout";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout />
      </Provider>
    </>
  );
}

export default App;
