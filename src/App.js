import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Products } from './Components/Products';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { Dashboard } from './Components/Dashboard';
import { Cart } from './Components/Cart';
import { RouterLayout } from './Components/RouterLayout'
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RouterLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/card" element={<Cart />}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

