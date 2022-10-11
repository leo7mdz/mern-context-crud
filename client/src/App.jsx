import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import FormPage from "./pages/FormPage";
import HomePages from "./pages/HomePages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/form">Nueva publicacion</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
