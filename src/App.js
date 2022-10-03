import "./App.css";
import { Header } from "./Components/Header";
import { SearchFilters } from "./Components/SearchFilters";
import { SearchList } from "./Components/SearchList";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchFilters />
      <SearchList />
    </div>
  );
}

export default App;
