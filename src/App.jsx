import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import NewQuiz from "./pages/NewQuiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="create-new-quiz" element={<NewQuiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
