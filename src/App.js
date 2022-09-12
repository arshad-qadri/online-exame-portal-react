import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/exam" element={<Quiz/>}/>
      {/* <Quiz /> */}
      </Routes>
    </>
  );
}

export default App;
