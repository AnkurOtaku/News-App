import Navbar from "./components/Navbar.jsx";
import NewsField from "./components/NewsField.jsx";
import Weather from "./components/Weather.jsx";
import { AppProvider } from "./store/store.jsx";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Weather />
      <NewsField />
    </AppProvider>
  );
}

export default App;