import { useLocation } from 'react-router-dom';

const PageLink = ({ name, href, parentClass }) => {
  const location = useLocation();
  const locationHash = location.hash;
  return (
    <li>
      <a
        href={href}
        className={`${parentClass} ${href === locationHash ? 'active' : ''}`}
      >
        {name}
      </a>
    </li>
  );
};

export default PageLink;
