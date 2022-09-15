import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Layout from "./layouts";
import LogInLayout from "./layouts/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={`${theme}`}>
      <Header />
      {location.pathname.includes(["/exam"]) ? (
        <Layout>
          <Routes>
            <Route path="/exam" element={<Quiz />} />
          </Routes>
        </Layout>
      ) : (
        <LogInLayout>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </LogInLayout>
      )}
      <Footer />
    </div>
  );
}

export default App;
