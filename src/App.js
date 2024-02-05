import Category from "./components/Category.jsx";
import Error from "./components/Error.jsx";
import Navbar from "./components/Navbar.jsx";
import NewsField from "./components/NewsField.jsx";
import Weather from "./components/Weather.jsx";
import Note from "./components/Note.jsx"

function App() {
  return (
    <>
      <Note/>
      <Navbar />
      <Weather />
      <Category />
      <Error />
      <NewsField />
    </>
  );
}

export default App;
