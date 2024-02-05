import Category from "./components/Category.jsx";
import Error from "./components/Error.jsx";
import Navbar from "./components/Navbar.jsx";
import NewsField from "./components/NewsField.jsx";
import Weather from "./components/Weather.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Weather />
      <Category />
      <Error />
      <NewsField />
    </>
  );
}

export default App;
