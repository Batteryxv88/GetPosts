import cls from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Post from "./Post/Post";

function App() {
    return (
        <BrowserRouter>
            <section className={cls.app}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:postId" element={<Post />} />
                </Routes>
            </section>
        </BrowserRouter>
    );
}

export default App;
