import Contact from './Contact';
import { useContextAPI } from '../../context/contextAPI.js';

const Contacts = () => {
  const { contacts } = useContextAPI();

  ///////////////////////////////////////////////////////////////
  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Contact</span> List
      </h1>
      {contacts.map((contact) => {
        const { id, name, email, phone } = contact;

        return (
          <Contact key={id} id={id} name={name} email={email} phone={phone} />
        );
      })}
    </>
  );
};

export default Contacts;
