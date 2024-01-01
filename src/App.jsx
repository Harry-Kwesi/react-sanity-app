import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Layout />}>
              <Route index element={} />
              <Route path="current" element={} />
            </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
