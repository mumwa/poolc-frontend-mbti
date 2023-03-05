import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

import Main from "./components/page/Main";
import Quiz from "./components/page/Quiz";
import Result from "./components/page/Result";

function App() {
  const [mbti, setMbti] = useState("");
  const setResult = (mbti) => {
    setMbti(mbti);
  };

  return (
    <>
      <Header title="PoolC mbti test"></Header>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route
              exact
              path="/quiz"
              element={<Quiz setResult={setResult} />}
            />
            <Route exact path="/result" element={<Result mbti={mbti} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
      <Footer></Footer>
    </>
  );
}
export default App;
