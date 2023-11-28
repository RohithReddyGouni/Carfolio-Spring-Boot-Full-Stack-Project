import ListCarComponent from "./component/ListCarComponent";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateCarComponent from "./component/CreateCarComponent";
import UpdateCarComponent from "./component/UpdateCarComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div class="container">
          <Routes>
            <Route path="/" element={<ListCarComponent />} />
            <Route path="/cars" element={<ListCarComponent />} />
            <Route path="/add-car" element={<CreateCarComponent />} />
            <Route path="/update-car/:id" element={<UpdateCarComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
