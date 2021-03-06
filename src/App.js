import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import InventoryPage from './Pages/Inventory/InventoryPage/InventoryPage';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import Blog from './Pages/Blog/Blog';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import NotFound from './Pages/Shared/NotFound/NotFound';
import AddInventory from './Pages/Inventory/AddInventory/AddInventory';
import MyProduct from './Pages/MyProduct/MyProduct';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/inventory/:productId" element={
          <RequireAuth>
            <InventoryPage></InventoryPage>
          </RequireAuth>
        } ></Route>
        <Route path="/my" element={
          <RequireAuth>
            <MyProduct></MyProduct>
          </RequireAuth>
        } />
        <Route path="/manage" element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>
        } />
        <Route path="/add" element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        } />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
