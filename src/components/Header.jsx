import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ toggleForm, onToggleAdd, title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onToggleAdd={onToggleAdd}
        color={toggleForm ? 'red' : 'green'}
        text={toggleForm ? 'close' : 'Add'}
      />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task',
};
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
