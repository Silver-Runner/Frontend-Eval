
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MemoryGame from './pages/MemoryGame'
import ModalOverlay from './pages/ModalOverlay'
import TwofactorCode from './pages/TwofactorCode'
import UndoableCounter from './pages/UndoableCounter'
import ShoppingList from './pages/ShoppingList'
import CountdownTimer from './pages/CountdownTimer'
const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/memory-game' element={<MemoryGame/>}/>
          <Route path='/modal-overlay' element={<ModalOverlay />}/>
          <Route path='/two-factor-code' element={<TwofactorCode />}/>
          <Route path='/undoable-counter' element={<UndoableCounter />}/>
          <Route path='/shopping-list' element={<ShoppingList />}/>
          <Route path='/countdown-timer' element={<CountdownTimer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
