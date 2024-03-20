import "./App.css";
import { RiComputerFill } from "react-icons/ri";
import { FaCamera, FaCloud } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";

function App() {
  return (
    <>
      {/*Home Container*/}
      <div className="w-full h-full bg-[url('/img/background-img.png')] bg-cover">
        {/*Navbar*/}
        <div className="flex flex-row justify-between items-center px-[100px] pt-[20px] bg-sky-500 text-white pb-5 drop-shadow-[0_1px_5px_rgba(255,255,255,0.8)]">
          <h1 className="text-[32px] font-semibold">Website</h1>
          <div className="w-full text-right font-medium">
            <button className="text-[16px] pe-8 hover:underline hover:underline-offset-8 hover:text-sky-900">
              Home
            </button>
            <button className="text-[16px] pe-8 hover:underline hover:underline-offset-8 hover:text-sky-900">
              Feature
            </button>
            <button className="text-[16px] pe-8 hover:underline hover:underline-offset-8 hover:text-sky-900">
              Gallery
            </button>
            <button className="text-[16px] pe-8 hover:underline hover:underline-offset-8 hover:text-sky-900">
              Price and Plan
            </button>
            <button className="text-[16px] pe-8 hover:underline hover:underline-offset-8 hover:text-sky-900">
              Team
            </button>
            <button className="text-[16px] pe-8 hover:underline hover:underline-offset-8 hover:text-sky-900">
              Contract
            </button>
          </div>
        </div>

        {/*Content*/}
        <div className="flex flex-col justify-center items-center pt-[300px]">
          <p className="text-sky-900 text-[80px] font-bold drop-shadow-[0_5px_5px_rgba(255,255,255,0.8)]">
            Kimi No Nawa
          </p>
          <p className="text-white font-medium text-[24px] drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex flex-row justify-center items-center gap-5 pt-[30px]">
            <button className="bg-sky-500 border-2 border-sky-500 py-[15px] px-[50px] rounded-md text-white font-semibold text-[16px] hover:scale-95 transition-all hover:bg-transparent hover:border-2 hover:border-white">
              Watch Now
            </button>
            <button className="bg-white border-2 border-white py-[15px] px-[50px] rounded-md text-sky-600 font-semibold text-[16px] hover:scale-95 transition-all hover:bg-transparent hover:border-2 hover:text-white">
              Download
            </button>
          </div>
        </div>
      </div>

      {/*Features Container*/}
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/*Top Content*/}
        <div>
          <h1 className="text-[54px] font-semi pb-[10px]">Features</h1>
          <p className="w-[700px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            provident sint dolorem, dicta accusamus rerum nihil quibusdam
            libero.
          </p>
        </div>

        {/*Bottom Content*/}
        <div className="flex flex-row justify-center items-center gap-[160px] pt-[150px]">
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="bg-sky-500 rounded-full p-[60px] text-[40px] text-white">
              <RiComputerFill />
            </div>
            <div className="flex flex-col justity-center items-center gap-5">
              <h1 className="font-semibold text-[16px]">Fully Responsive</h1>
              <p className="w-[250px] text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipis.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-10">
            <div className="bg-sky-500 rounded-full p-[60px] text-[40px] text-white">
              <IoHeartSharp />
            </div>
            <div className="flex flex-col justity-center items-center gap-5">
              <h1 className="font-semibold text-[16px]">Fully Responsive</h1>
              <p className="w-[250px] text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipis.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-10">
            <div className="bg-sky-500 rounded-full p-[60px] text-[40px] text-white">
              <FaCloud />
            </div>
            <div className="flex flex-col justity-center items-center gap-5">
              <h1 className="font-semibold text-[16px]">Fully Responsive</h1>
              <p className="w-[250px] text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipis.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-10">
            <div className="bg-sky-500 rounded-full p-[60px] text-[40px] text-white">
              <FaCamera />
            </div>
            <div className="flex flex-col justity-center items-center gap-5">
              <h1 className="font-semibold text-[16px]">Fully Responsive</h1>
              <p className="w-[250px] text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
