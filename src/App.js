import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
