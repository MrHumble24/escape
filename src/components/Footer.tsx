import footer from "../assets/images/footer.png";
import SectionTitle from "./SectionTitle";

const CFooter = () => {
  return (
    <div
      style={{ backgroundImage: `url(${footer})` }}
      className=" mx-auto min-h-[380px] mt-16 flex flex-col  bg-cover bg-center bg-no-repeat justify-center "
    >
      <div className=" px-8 md:px-0 h-full flex flex-col justify-center justify-self-center max-w-[940px] w-full self-center">
        <SectionTitle title="Stay in Touch" color="text-white" />
        <div className="flex self-center items-center">
          <input
            className="md:px-[70px] px-[30px] py-[15px]"
            placeholder="Enter your email address"
            type="text"
          />
          <button className="md:px-[70px] px-[30px] py-[15px] text-white bg-[#ff385c] backdrop-blur-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default CFooter;
