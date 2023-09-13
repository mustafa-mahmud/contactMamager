import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormControl from './FormControl';
import { useContextAPI } from '../../context/contextAPI.js';

const initValue = {
  name: '',
  email: '',
  phone: '',
};

const AddContact = () => {
  const navigate = useNavigate();
  const { addContact, showFormAlert, formField } = useContextAPI();
  const [value, setValue] = useState(initValue);

  const submitHandle = (e) => {
    e.preventDefault();

    if (!value.name) {
      showFormAlert(true, 'name', 'Pls fill NAME input field...');
      return;
    }

    if (!value.email) {
      showFormAlert(true, 'email', 'Pls fill EMAIL input field...');
      return;
    }

    if (!value.phone) {
      showFormAlert(true, 'phone', 'Pls fill PHONE input field...');
      return;
    }

    const newContact = {
      name: value.name,
      email: value.email,
      phone: value.phone,
    };

    setValue(initValue);
    addContact(newContact);
    navigate('/');
  };

  /////////////////////////////////////////////////
  return (
    <div className="card mb-3 mt-5">
      <div className="card-header">Add Contact</div>
      <div className="card-body">
        <form onSubmit={submitHandle}>
          {/* name */}
          <FormControl
            name="name"
            type="text"
            text="Enter name..."
            value={value.name}
            errorCls={`${formField === 'name' ? 'is-invalid' : ''}`}
            changeHandler={(e) => setValue({ ...value, name: e.target.value })}
          />
          {/* email */}
          <FormControl
            name="email"
            type="email"
            text="Enter email..."
            value={value.email}
            errorCls={`${formField === 'email' ? 'is-invalid' : ''}`}
            changeHandler={(e) => setValue({ ...value, email: e.target.value })}
          />
          {/* phone */}
          <FormControl
            name="phone"
            type="text"
            text="Enter phone..."
            value={value.phone}
            errorCls={`${formField === 'phone' ? 'is-invalid' : ''}`}
            changeHandler={(e) => setValue({ ...value, phone: e.target.value })}
          />
          {/* button */}
          <input
            type="submit"
            value="Add Contact"
            className="btn btn-block btn-dark mt-3 w-100"
          />
        </form>
      </div>
    </div>
  );
};

export default AddContact;
