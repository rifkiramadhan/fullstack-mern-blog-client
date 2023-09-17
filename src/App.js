import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  AddNewCategory,
  CategoryList,
  HomePage,
  Login,
  Navbar,
  Register,
  UpdateCategory,
} from './components';
import PrivateProtectedRoute from './components/Navigation/ProtectedRoutes/PrivateProtectedRoute';
import AdminRoute from './components/Navigation/ProtectedRoutes/AdminRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/add-category'
          element={<AdminRoute element={<AddNewCategory />} />}
        />
        <Route
          path='/category-list'
          element={<AdminRoute element={<CategoryList />} />}
        />
        <Route
          path='/update-category/:id'
          element={<AdminRoute element={<UpdateCategory />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
