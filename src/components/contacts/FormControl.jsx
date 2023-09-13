import PropTypes from 'prop-types';
import { useContextAPI } from '../../context/contextAPI.js';

const FormControl = ({ name, value, text, changeHandler, errorCls }) => {
  const { formAlertMsg } = useContextAPI();
  const htmlFor = name.charAt(0).toUpperCase() + name.slice(1, name.length);

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label float-start">
        {htmlFor}
      </label>
      <input
        type={name !== 'email' ? 'text' : 'email'}
        name={name}
        value={value}
        className={`form-control form-control-lg ${errorCls}`}
        placeholder={text}
        onChange={changeHandler}
      />
      <div className="invalid-feedback text-start">{formAlertMsg}</div>
    </div>
  );
};

FormControl.defaultProps = {
  type: 'text',
};

FormControl.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default FormControl;
