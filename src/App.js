import "./App.css";
import Header from "./Components/Header/Header";
import TitleSection from "./Components/Main/TitleSection";
import man1 from "./assets/man-1.png";
import travel from "./assets/Travel.png";
import BodySection from "./Components/Main/BodySection";
import CardSection from "./Components/Main/CardSection";
import BodySection2 from "./Components/Main/BodySection2";
import CardSection2 from "./Components/Main/CardSection2";

function App() {
  return (
    <div className="bg-[#18191A] min-h-screen">
      {/* start header */}
      <Header />
      {/* header end*/}
      <main className="max-w-[820px] mx-auto">
        <section className="bg-[#FDFFFC] w-full rounded-lg mt-[30px]">
          <TitleSection />
        </section>
        <section className="w-full">
          <BodySection />
          <BodySection2 />
        </section>
        <section className="mt-[23px] w-full">
          <h3 className="text-[20px] font-bold pb-[10px] text-[#FFFFFF]">
            Amazing authors to follow
          </h3>
          <CardSection />
        </section>
        <section className="mt-[23px] w-full bg-[#FDFFFC] rounded-lg">
          <div className="pt-[18px] px-[18px] border-b">
            <h4 className="text-[20px] font-bold  leading-[23px]   text-[#242526]">
              This text is for our article title, sometime it should be long as like this but also
              can be a one liner instead of 2 lines. This is an example of long story without cover
            </h4>
            <div className="mt-[8.5px] pb-[7px] ">
              <div className="flex justify-between items-center">
                <div className="flex gap-2  justify-center items-center">
                  <img src={man1} className="h-[42px] w-[42px]" alt="Michael_Scott_photo" />
                  <span className="text-[#000000]">Michael Scott</span>
                </div>

                <div className="flex gap-[10px] justify-center items-center">
                  <img src={travel} alt="Travel_logo" />
                  <span className="text-[#000000]">Travel for explore</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[19px] py-[16px]">
            <span className="text-[15px] text-[#BCB8B1]">
              Nov 4, 2019 | 2 min read{" "}
              <strong className="text-[#707070]">#Website #Design #Dev_Web #Adobe….</strong>
            </span>
          </div>
        </section>

        <section className="mt-[23px] w-full">
          <BodySection2 />
          <BodySection />
        </section>
        <section className="mt-[23px] w-full">
          <h3 className="text-[20px] font-bold pb-[10px] text-[#FFFFFF]">
            Amazing communities to follow
          </h3>
          <CardSection2 />
        </section>
      </main>
    </div>
  );
}

export default App;
