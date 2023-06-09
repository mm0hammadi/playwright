import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const MainLayout = lazy(() => import("./Layout/MainLayout"));
const Cart = lazy(() => import("./Pages/Cart"));
const FullPizza = lazy(() => import("./Pages/FullPizza"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>سبد خرید در حال بارگیری است </div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/pizza/:id"
          element={
            <Suspense fallback={<div>...در حال بارگیری </div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>در حال بارگیری ...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
