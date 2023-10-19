import { FaRocket, FaEye, FaHandshake } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 my-10 w-9/12 mx-auto min-h-screen">
      <h1 className="text-5xl font-bold text-darkBlue">About US</h1>
      <p>
      At Halo, we are dedicated to redefining beauty through innovation, quality, and inclusivity. Founded with a passion for enhancing your natural allure, we believe that true beauty radiates from within. Our mission is to empower individuals to embrace their unique style, embrace their confidence, and express their individualit
      </p>
      <p>
        Join us in celebrating beauty, diversity, and self-expression. Welcome to a world where you are free to be you, where every shade, every style, and every unique story is celebrate
      </p>
      <div className="grid grid-cols-3 mt-5 gap-3">
        <div>
          <div className="flex gap-2 items-center mb-5">
              <FaRocket/>
            <h1 className="text-xl font-semibold">Mission</h1>
          </div>
          <ul className="flex gap-1 flex-col font-light">
            <li>Adapting modern techniques and resources.</li>
            <li>Providing training/seminars, secure work environment, and growth opportunities to employees.</li>
            <li>Ensuring cost control and efficient usage of resources.</li>
          </ul>
        </div>
        <div>
          <div className="flex gap-2 items-center mb-5">
              <FaEye />
            <h1 className="text-xl font-semibold">Vision</h1>
          </div>
          <ul className="flex gap-1 flex-col font-light">
            <li> Aspires to become the leading cosmetics company.</li>
            <li>Create a diverse and inclusive beauty community </li>
            <li>Instilling long-term brand loyalty towards its products among the people both at home and abroad.</li>
          </ul>
        </div>
        <div>
          <div className="flex gap-2 items-center mb-5">
              <FaHandshake/>
            <h1 className="text-xl font-semibold">Commitments</h1>
          </div>
          <ul className="flex gap-1 flex-col font-light">
            <li> We are committed to delivering products of the highest quality </li>
            <li>Providing exceptional customer service and a seamless shopping experience.</li>
            <li>
            We are mindful of our environmental footprint and strive to reduce waste and promote eco-friendly practices.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;