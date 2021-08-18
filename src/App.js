import { ThemeProvider } from "./context/ThemeContext";
import MarketList from "./component/MarketList";

function App() {
  return (
    <div>
      <ThemeProvider>
        <MarketList />
      </ThemeProvider>
    </div>
  );
}

export default App;
