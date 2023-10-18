import { NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <div
      className="hero mix-blend-darken min-h-[87vh]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/SvTr2sR/Halo-Cosmetics.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Halo Cosmetics</h1>
          
          <p className="mb-5">
            Enhancing Beauty, Inspiring Confidence
          </p>
          <NavLink to={`/login`}>
                <button className="btn btn-primary">Get Started</button>
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
