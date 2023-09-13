import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContextAPI } from '../../context/contextAPI.js';

const Contact = ({ name, email, phone, id }) => {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const { deleteContact, getSingleContact } = useContextAPI();

  ////////////////////////////////////////////////////////////////
  return (
    <div className="card card-body mp-3">
      <h4>
        {name}
        <i
          onClick={() => setShowContactInfo(!showContactInfo)}
          className="fa fa-caret-down"
          style={{ cursor: 'pointer', marginLeft: '10px' }}
        ></i>
        <i
          className="fa fa-times"
          style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          onClick={() => deleteContact(id)}
        ></i>
        <Link to={`/contact/edit/${id}`}>
          <i
            className="fa fa-pencil"
            style={{
              cursor: 'pointer',
              color: 'black',
              marginRight: '20px',
              float: 'right',
            }}
            onClick={() => getSingleContact(id)}
          ></i>
        </Link>
      </h4>

      {showContactInfo ? (
        <ul className="list-group">
          <li className="list-group-item">Email:{email}</li>
          <li className="list-group-item">Phone:{phone}</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Contact;
