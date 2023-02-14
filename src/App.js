import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

import Main from "./components/page/Main";
import Quiz from "./components/page/Quiz";
import Result from "./components/page/Result";

function App() {
  return (
    <>
      <Header title="PoolC mbti test"></Header>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/quiz" element={<Quiz />} />
            <Route exact path="/complete" element={<Result />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
      <Footer></Footer>
    </>
  );
}
export default App;
