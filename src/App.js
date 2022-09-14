import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Layout from "./layouts";
import LogInLayout from "./layouts/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <>
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
      <Footer/>
    </>
  );
}

export default App;
