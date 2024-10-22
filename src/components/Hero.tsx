import bg from "../assets/images/bg-hero.png";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <header
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-no-repeat bg-center text-white p-4 lg:min-h-[650px] md:min-h-[600px] min-h-[500px] flex flex-col"
    >
      <Navbar />
      <div className="max-w-[900px] w-full mx-auto  flex items-center justify-center flex-col flex-1">
        <h1 className="text-center text-5xl font-bold lett tracking-wider">
          Let's do it together.
        </h1>
        <p className="text-center mt-4 opacity-[0.7]">
          We travel the world in search of stories. Come along for the ride.
        </p>
      </div>
    </header>
  );
};

export default Hero;
