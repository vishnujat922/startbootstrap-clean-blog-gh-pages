import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./Pages/Index";
import { Post } from "./Pages/Post";
import { About } from "./Pages/About";
import Contact from "./Pages/Contact";
import Layout from "./Pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='post' element={<Post />}></Route>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
