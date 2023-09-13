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

const reducer = (state, action) => {
  /* show form alert */
  if (action.type === SHOW_FORM_ALERT) {
    return {
      ...state,
      formAlert: action.payload.bool,
      formField: action.payload.field,
      formAlertMsg: action.payload.msg,
    };
  }

  /* hide form alert */
  if (action.type === HIDE_FORM_ALERT) {
    return {
      ...state,
      formAlert: false,
      formField: '',
      formAlertMsg: '',
    };
  }

  /* show alert */
  if (action.type === SHOW_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: action.payload.type,
      alertMsg: action.payload.msg,
    };
  }

  /* hide alert */
  if (action.type === HIDE_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: 'success',
      alertMsg: '',
    };
  }

  /* get contacts */
  if (action.type === GET_CONTACTS) {
    return {
      ...state,
      contacts: action.payload.contacts,
    };
  }

  /* get single contact */
  if (action.type === GET_SINGLE_CONTACT) {
    return {
      ...state,
      singleContact: action.payload.contact,
    };
  }

  /* edit single contact */
  if (action.type === EDIT_CONTACT) {
    return {
      ...state,
      contacts: action.payload.contacts,
    };
  }

  /* add contact */
  if (action.type === ADD_CONTACT) {
    return {
      ...state,
      contacts: [...state.contacts, action.payload.contact],
    };
  }

  /* delete contact */
  if (action.type === DELETE_CONTACT) {
    const newContacts = state.contacts.filter(
      (contact) => contact.id !== action.payload.id
    );
    return {
      ...state,
      contacts: newContacts,
    };
  }

  throw new Error(`Reducer action: ${action.type} does not found...`);
};

export default reducer;
