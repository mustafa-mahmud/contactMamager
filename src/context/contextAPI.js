import { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import axios from 'axios';
import {
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACTS,
  SHOW_ALERT,
  HIDE_ALERT,
  SHOW_FORM_ALERT,
  HIDE_FORM_ALERT,
  GET_SINGLE_CONTACT,
  EDIT_CONTACT,
} from './actions';

const ContextCreate = createContext();

const initialState = {
  contacts: [],
  singleContact: {},
  formAlert: false,
  formField: '',
  formAlertMsg: '',
};

const MyContextAPI = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = (type, msg) => {
    dispatch({ type: SHOW_ALERT, payload: { type, msg } });

    hideAlert();
  };

  const showFormAlert = (bool, field, msg) => {
    dispatch({ type: SHOW_FORM_ALERT, payload: { bool, msg, field } });
  };

  const hideAlert = () => {
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT });
    }, 2500);
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      dispatch({ type: DELETE_CONTACT, payload: { id } });
    } catch (error) {
      console.log(error);
    }
  };

  const addContact = async (contact) => {
    try {
      const { data } = await axios.post(
        `https://jsonplaceholder.typicode.com/users`,
        contact
      );

      dispatch({ type: ADD_CONTACT, payload: { contact: data } });
      dispatch({ type: HIDE_FORM_ALERT });
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleContact = (id) => {
    const contact = state.contacts.find((item) => item.id === id);

    dispatch({ type: GET_SINGLE_CONTACT, payload: { contact } });
    signleContactSaveLOC(contact);
  };

  const getContacts = async () => {
    try {
      const { data } = await axios(
        'https://jsonplaceholder.typicode.com/users'
      );
      const contacts = data.map((user) => {
        const { id, name, email, phone } = user;

        return { id, name, email, phone };
      });

      dispatch({ type: GET_CONTACTS, payload: { contacts } });
    } catch (error) {
      console.log(error);
    }
  };

  const signleContactSaveLOC = (contact) => {
    localStorage.setItem('singleContact', JSON.stringify(contact));
  };

  const singleContactRemoveLOC = () => {
    localStorage.removeItem('singleContact');
  };

  const editContact = async (id, contact) => {
    try {
      const { data } = await axios.patch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        contact
      );

      const newContacts = state.contacts.map((contact) => {
        if (String(contact.id) !== id) return contact;
        else return data;
      });

      dispatch({ type: EDIT_CONTACT, payload: { contacts: newContacts } });
      singleContactRemoveLOC();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  ///////////////////////////////////////////////////
  return (
    <ContextCreate.Provider
      value={{
        ...state,
        deleteContact,
        addContact,
        displayAlert,
        showFormAlert,
        editContact,
        getContacts,
        getSingleContact,
      }}
    >
      {children}
    </ContextCreate.Provider>
  );
};

export const useContextAPI = () => {
  return useContext(ContextCreate);
};

export default MyContextAPI;
