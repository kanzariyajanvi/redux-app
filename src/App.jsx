

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Products from "./pages/Products";
// import Manage from "./pages/Manage";

// export default function App() {
//   const [isLogin, setIsLogin] = useState(false);

//   return (
//     <BrowserRouter>
//       <Header isLogin={isLogin} setIsLogin={setIsLogin} />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/manage" element={<Manage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// (optional pages if created)
import Products from "./pages/Products";
import Manage from "./pages/Manage";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      {/* Header */}
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />

        <Route
          path="/login"
          element={<Login setIsLogin={setIsLogin} />}
        />

        <Route path="/register" element={<Register />} />

        {/* Protected-like pages */}
        <Route path="/products" element={<Products />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </BrowserRouter>
  );
}