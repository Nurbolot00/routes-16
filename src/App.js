import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Details from './pages/Details';
import Home from './pages/Home';
import MyCart from './pages/MyCart';
import MyOrders from './pages/MyOrders';
import Products from './pages/Products';


const products = [
  {
    id: 1,
    title: "Asus TUF Gaming",
    description: 'Новый TUF FX506 не побалует пользователя дополнительным оснащением, вроде вездесущей RGB-подсветки, но в плане производительности точно не разочарует.',
    price: "1050",
    url: 'https://i0.wp.com/www.pcplus.co.id/wp-content/uploads/2020/04/TUF-Gaming-FX506-01.png?fit=1257%2C886&ssl=1'
  },
  {
    id: 2,
    title: "Acer Nitro 5",
    description: 'Acer Nitro 5 AN515-55 - это новая модель в серии Nitro 5, получившая адекватные характеристики и честный ценник. К нам на обзор поступила конфигурация с RTX 3060 - одной из самых современных видеокарт от Nvidia.',
    price: "950",
    url: 'https://notebookmall.am/wp-content/uploads/2022/11/Nitro5_AN515_45_56_57_Standard_02.png'
  },
  {
    id: 3,
    title: "Lenovo Legion 5",
    description: 'Испытайте игру, как никогда раньше, на игровом ноутбуке Legion 5i на базе процессоров Intel® Core ™ H-серии 10-го поколения. Воспроизведение и потоковая передача последних версий AAA с максимальной производительностью на Legion 5i с тактовой частотой до 5,0 ГГц, 6 ядрами, 12 МБ Intel® Smart Cache, Intel® Thermal Velocity Boost, Intel® Dynamic Tuning и Intel® Wi-Fi 6.',
    price: "1110",
    url: 'https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8OTg3MzV8aW1hZ2UvcG5nfGgxOC9oZDAvMTE0MDI0ODY3MTAzMDIucG5nfGFiNmJiOWU3YmNjZmYwMDY3YjYwMzc0YzBkYjQwYzRkYjIyZDVhOTliNjFiYzVhYjI4NmY5Y2RmYTNmNWU1ZmY'
  }
]

function App() {
  return (
    <>
    <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products products={products}/>} />
          <Route path='/products/:id/details' element={<Details products={products}/>} />
          <Route path='/myCart' element={<MyCart/>}/>
          <Route path='/myOrders ' element={<MyOrders/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
