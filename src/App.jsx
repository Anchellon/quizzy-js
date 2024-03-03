import SharedLayout from "./pages/SharedLayout";
import Home, { loader as quizsInfoLoader } from "./pages/Home";
import About from "./pages/About";
import DraggableComponent from "./pages/draggableComponent";
import DynamicForm from "./pages/DynamicForm";
import Quiz, { loader as quizLoader } from "./pages/Quiz";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import StudentHome from "./pages/Student/StudentHome";
import Test, { loader as testLoader } from "./pages/Student/Test";
// import "../server";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<SharedLayout />}>
            <Route
                index
                element={<Home />}
                loader={async () => {
                    let data = await quizsInfoLoader();
                    return data;
                }}
            />
            <Route path="about" element={<About />} />
            <Route
                path="quiz/:id"
                element={<Quiz />}
                loader={async ({ params }) => {
                    let data = await quizLoader(params.id);
                    return data;
                }}
            />
            {/* <Route path="test" element={<DynamicForm />} /> */}
            <Route path="student">
                <Route
                    path=""
                    element={<StudentHome />}
                    loader={async () => {
                        let data = await quizsInfoLoader();
                        return data;
                    }}
                />

                <Route
                    path="test/:id"
                    element={<Test />}
                    loader={async ({ params }) => {
                        let data = await testLoader(params.id);
                        return data;
                    }}
                />
            </Route>
            <Route path="drag" element={<DraggableComponent />} />
        </Route>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
