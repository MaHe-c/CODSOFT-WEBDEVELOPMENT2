import "./App.css";
// import { Main } from "./Components/Main";
// import { HashRouter as Router,Routes,Route } from "react-router-dom";
// import { Home } from "./Pages/Home";
// import { Page1 } from "./Pages/Page1";
// import { Page2 } from "./Pages/Page2";
// import { Page3 } from "./Pages/Page3";
// import { Layout } from "./Layout";
import { Flower } from ".//Components/Flower.jsx";



function App() {
  return (
    <div>
      {/* <Main /> */}
      {/* <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Route>
        </Routes>
      </Router> */}
      <Flower />

    </div>
    
  );
}

export default App;