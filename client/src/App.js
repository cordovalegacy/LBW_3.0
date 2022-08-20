import {useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import DisplayPets from './components/DisplayPets';
import AddPets from './components/AddPets';
import IdentifyPet from './components/IdentifyPet';
import UpdatePets from './components/UpdatePets'
import './App.css';

function App() {

  const [petList, setPetList] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <h1 id='spacer'>Pet Shelter</h1>
          <br/>
        </nav>
        <Routes>
          <Route path='/' element={<DisplayPets petList={petList} setPetList={setPetList} />} />
          <Route path='/pets/new' element={<AddPets petList={petList} setPetList={setPetList} />} />
          <Route path='/pets/:id' element={<IdentifyPet petList={petList} setPetList={setPetList} />} />
          <Route path='/pets/edit/:id' element={<UpdatePets petList={petList} setPetList={setPetList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;