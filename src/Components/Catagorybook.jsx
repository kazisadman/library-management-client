import PropTypes from 'prop-types';

const Catagorybook = ({selectedbook}) => {
  return (
    <div>
      <h1>catagory wise book.{selectedbook.length}</h1>
    </div>
  );
};

Catagorybook.propTypes = {
  selectedbook:PropTypes.object
};

export default Catagorybook;