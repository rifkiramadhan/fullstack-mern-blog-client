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

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add-category' element={<AddNewCategory />} />
        <Route path='/category-list' element={<CategoryList />} />
        <Route path='/update-category/:id' element={<UpdateCategory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
