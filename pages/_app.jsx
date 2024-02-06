import { SearchProvider } from "../contexts/SearchContext";
import "../globals.css";

function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  );
}

export default App;
