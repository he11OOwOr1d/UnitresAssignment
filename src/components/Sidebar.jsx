import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Sidebar = ({ menu }) => {
  return (
    <nav className="sidebar">
      <ul>
        {menu && menu.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Sidebar.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sidebar;
