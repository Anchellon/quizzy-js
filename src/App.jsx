import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import NewQuiz from "./pages/NewQuiz";
import DummyPage from "./pages/dummyformpage";
import DraggableComponent from "./pages/draggableComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="create-quiz" element={<NewQuiz />} />
          {/* <Route path="test" element={<DummyPage />} /> */}
          <Route path="drag" element={<DraggableComponent />} />
          {/* <Route path="test" element={<Test />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
