import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import {
  Contacts,
  AddContact,
  About,
  Header,
  NotFound,
  Test,
  EditContact,
} from './components';
import MyContextAPI from './context/contextAPI.js';

const App = () => {
  /////////////////////////////////////////////////////////////
  return (
    <MyContextAPI>
      <HashRouter>
        <div className="App">
          <Header branding="Contact Manager" />

          <div className="container">
            <Routes>
              <Route path="/" index element={<Contacts />} />
              <Route path="/contact/add" element={<AddContact />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact/edit/:id" element={<EditContact />} />
              <Route path="/test" element={<Test />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </MyContextAPI>
  );
};

export default App;
