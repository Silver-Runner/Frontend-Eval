import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const MemoryGame = lazy(() => import("./pages/MemoryGame"));
const ModalOverlay = lazy(() => import("./pages/ModalOverlay"));
const TwofactorCode = lazy(() => import("./pages/TwofactorCode"));
const UndoableCounter = lazy(() => import("./pages/UndoableCounter"));
const ShoppingList = lazy(() => import("./pages/ShoppingList"));
const CountdownTimer = lazy(() => import("./pages/CountdownTimer"));
const Layout = lazy(() => import("./layouts/Layout"));
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/Loader";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Suspense fallback={<Loader/>}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/memory-game" element={<MemoryGame />} />
                  <Route path="/modal-overlay" element={<ModalOverlay />} />
                  <Route path="/two-factor-code" element={<TwofactorCode />} />
                  <Route
                    path="/undoable-counter"
                    element={<UndoableCounter />}
                  />
                  <Route path="/shopping-list" element={<ShoppingList />} />
                  <Route path="/countdown-timer" element={<CountdownTimer />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
