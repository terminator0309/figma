import "./App.css";
import Chats from "./components/Chats";
import Interaction from "./components/Interaction";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chats />
      <Interaction />
    </div>
  );
}

export default App;
