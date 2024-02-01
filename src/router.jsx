import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/organisms/Header";
import Login from "./Components/page/Login";
import Main from "./Components/page/Main";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;