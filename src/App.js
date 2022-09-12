import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Layout from './layouts'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/exam" element={<Quiz />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
