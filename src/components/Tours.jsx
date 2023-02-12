import { tours } from '../utils/constants';
import Tour from './Tour';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <div className='section-title'>
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className='section-center featured-center'>
        {tours.map((tour, index) => (
          <Tour key={index} {...tour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
