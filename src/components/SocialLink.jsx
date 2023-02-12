const SocialLink = ({ href, icon, parentClass }) => {
  return (
    <li>
      <a href={href} className={parentClass} target='_blank' rel='noreferrer'>
        <i>{icon}</i>
      </a>
    </li>
  );
};

export default SocialLink;
