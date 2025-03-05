import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MemoryGame from "./pages/MemoryGame";
import ModalOverlay from "./pages/ModalOverlay";
import TwofactorCode from "./pages/TwofactorCode";
import UndoableCounter from "./pages/UndoableCounter";
import ShoppingList from "./pages/ShoppingList";
import CountdownTimer from "./pages/CountdownTimer";
import Layout from "./layouts/Layout";
import { Provider } from "react-redux";
import { store } from "./app/store";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/memory-game" element={<MemoryGame />} />
              <Route path="/modal-overlay" element={<ModalOverlay />} />
              <Route path="/two-factor-code" element={<TwofactorCode />} />
              <Route path="/undoable-counter" element={<UndoableCounter />} />
              <Route path="/shopping-list" element={<ShoppingList />} />
              <Route path="/countdown-timer" element={<CountdownTimer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
