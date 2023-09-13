import { useContextAPI } from '../../context/contextAPI.js';

const Test = () => {
  const { testTitle, testBody } = useContextAPI();

  /////////////////////////////////////////
  return (
    <div className="display-4">
      <h2>Title: {testTitle}</h2>
      <h3>Body: {testBody}</h3>
    </div>
  );
};

export default Test;
