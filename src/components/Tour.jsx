function Tour({ title, price, image, location, date, days, info, icon }) {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={image} className='tour-img' alt={title} />
        <p className='tour-date'>{date}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className='tour-footer'>
          <p>
            <span className='fas'>{icon}</span>
            {location}
          </p>
          <p>{days} days</p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  );
}

export default Tour;
