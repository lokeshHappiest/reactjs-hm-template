import { LogsContainer } from "./logs/LogsContainer";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import User from "./components/User";
import "./App.css";
import store from "./redux/root";
import CreateNote from "./components/CreateNote";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Hello World
        <LogsContainer />
        <Counter />
        <User />
        <CreateNote />
      </div>
    </Provider>
  );
}

export default App;
