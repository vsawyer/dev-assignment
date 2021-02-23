import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Contents from './components/Contents';

function App() {
  return (
    <Provider store={store}>
      <Contents />
    </Provider>
  );
}

export default App;
