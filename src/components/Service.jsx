const Service = ({ icon, name, text }) => {
  return (
    <article className='service'>
      <span className='service-icon'>{icon}</span>
      <div className='service-info'>
        <h4 className='service-title'>{name}</h4>
        <p className='service-text'>{text}</p>
      </div>
    </article>
  );
};

export default Service;
