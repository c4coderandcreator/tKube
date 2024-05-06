import React from "react";
import FooterTop from "../../FooterTop/FooterTop";
import Dot from "../../Dot/Dot";
import Tick from "../../Tick/Tick";
import LearnMore from "../../LearnMore/LearnMore";
import { Link } from "react-router-dom";
import Arrow from "../../Arrow/Arrow";
const AboutUs = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 ml-20">
        <div className="mt-[2rem] md:mt-[1.5rem]">
          <p className="font-extrabold text-left text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text">
            Tackling modern challenges with innovative solutions
          </p>
        </div>
        <div className="ml-64">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/4d99acac01967145ebc9718a423635e1424672b9/Image%20Resource/About%20Us/Target%20Illustration.svg"
            alt="img"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-7 text-black font-[Lufga-Regular-2]">
        <div></div>
        <div className="col-start-2 py-10 mr-4">
          <p>
            We are creators of possibilities, seeing modern challenges as a
            means for the creation of innovative solutions. With a team of
            skilled engineers, finding the right solution for your organisation
            is not a problem.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 pb-40">
        <div className="col-span-2 ">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/4d99acac01967145ebc9718a423635e1424672b9/Image%20Resource/About%20Us/Image%201.svg"
            alt="img"
          />
        </div>
        <div className="col-span-2 translate-y-40 ">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/4d99acac01967145ebc9718a423635e1424672b9/Image%20Resource/About%20Us/Image%202.svg"
            alt="img"
          />
        </div>
        <div className="col-span-2 translate-y-24">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/4d99acac01967145ebc9718a423635e1424672b9/Image%20Resource/About%20Us/Image%203.svg"
            alt="img"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/4d99acac01967145ebc9718a423635e1424672b9/Image%20Resource/About%20Us/Image%204.svg"
            alt="img"
          />
        </div>
      </div>
      {/* home part */}
      <div className="mt-20">
        <div className="mx-2 md:mx-24 mt-4">
          <div className="flex items-center border-b border-[#595959] mb-6 pb-4 ">
            <Dot />
            <p className="ml-2 text-black font-[Lufga-Bold-2] ">
              Meet the team
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-20">
          <div className="font-[Lufga-ExtraBold-2] text-[2.3rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
            <p>
              Meet our team of <span className="text-[#001eee]">creators</span>,{" "}
              <span className="text-[#001eee]">designers</span>, and world-class{" "}
              <span className="text-[#001eee]">problem solvers</span>
            </p>
            <p className="font-[Lufga-Light-2] text-[1rem] py-6">
              Diversity is at the heart of our organization as this is the
              source of our strength. Unique People = Unique Ideas.
            </p>
            {/* <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2"></div> */}
          </div>

          {/* <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center"></div> */}
        </div>
      </div>
      {/* FooterTop */}
      <div className="flex flex-wrap items-center justify-between py-2 md:py-8 md:px-24">
        <div className="font-[Lufga-ExtraBold-2] text-[2.1rem] text-black px-6 w-full md:w-1/2 flex flex-wrap">
          <p>
            <span className="text-black"> Ultimately </span>
            everything begins with an idea
          </p>
          <p className="font-[Lufga-Light-2] text-[1rem]">
            Got one? Get in touch with us today.
            <div className="flex flex-col font-[Lufga-Light-2] text-[1rem] m-6 gap-2 flex-start">
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Focus on business priorities</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Certified Professionals</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <Tick /> <p className="pl-2">Lower operating costs</p>
                </div>
              </div>
            </div>
            <div className=" navbar-end font-[Lufga-Regular-2] font-extrabold mx-4 flex">
              <a className="btn text-white bg-[#001eee]">
                <Link href="#about" to="../contact">
                  Contact Us{" "}
                </Link>{" "}
                {<Arrow />}
              </a>
            </div>
          </p>
        </div>

        <div className=" text-[#595959] font-[Lufga-Regular-2] text-[1rem] px-6 md:w-1/2 flex flex-wrap items-center">
          <img
            className="hidden md:block"
            src="https://raw.githubusercontent.com/c4coderandcreator/tKube/5450d691b55018be3fb4fa69aaf7e37b5d3d1dbe/Image%20Resource/Home%20Resources/Contact.svg"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
