import "./App.css";
import { Sidebar } from "./Components/sidebar";
import { Main } from "./main";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
