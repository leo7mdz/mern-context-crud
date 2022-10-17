import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PostProvider from "../context/PostContext";
import FormPage from "./pages/FormPage";
import HomePages from "./pages/HomePages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PostProvider>
          <header>
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/form">
                    Nueva publicacion
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/form/:id" element={<FormPage />} />
          </Routes>
        </PostProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
