import { Link } from 'react-router-dom';

import { Fade } from 'react-reveal';
import Navbar from '../../components/Navbar';

import { useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../utils/functions';
import { useEffect, useState } from 'react';
import Announcement from '../../components/Announcement';
import First from './First';
import Sec from './Sec';
import DayInLife from './DayInLife';
import Benifits from './Benfits';
import CamperChoice from './CamperChoice';
import Community from './Community';
import LastSec from './LastSec';
function Home() {
	let navigate = useNavigate();

	return (
		<div className='  relative   lg:-mt-[5px]'>
			<First></First>
			<Sec></Sec>
			<DayInLife></DayInLife>
			<Benifits></Benifits>
			<CamperChoice></CamperChoice>
			<Community></Community>

			{/* <Navbar></Navbar> */}
			{/* <section className="   relative    border-black flex lg:flex-row flex-col  text min-h-screen text-black">
        <div
          style={{
            background:
              'linear-gradient(0deg, rgba(40,39,36,1) 0%, rgba(85,84,82,0.5) 36%, rgba(255,255,255,0) 100%)',
          }}
          className="absolute lg:hidden  top-0 h-full left-0 w-full"
        >
          <Fade>
            <video
              playsInline
              src={video}
              loop
              autoPlay
              muted
              className=" h-full object-center lg:block hidden  lg:object-left mix-blend-multiply object-cover"
            ></video>
          </Fade>
        </div>

        <div className="lg:w-1/2   xl:flex lg:relative z-20  justify-end flex-1 bg-[#0B0B0B] ">
          <div className="flex lg:w-fit  flex-col justify-end lg:relative lg:z-20 bg-[#0B0B0B]">
            <div className=" bg-[#0B0B0B]  relative z-20 text-white space-y-[30px] pt-[150px] lg:space-y-[72px]    py-[80px] pl-[100px] lg:py-[128px] lg:px-[150px]      w-full lg:max-w-[726px]">
              <p className="text-[40px] lg:block text-[#F8EED3] hidden relative lg:text-[84px]  Hiragino lg:leading-[85px] tracking-[-6.72px]">
                The Best <br /> For Your <br />{' '}
                <span className="text-[#F6C94B]">Guest.</span>
              </p>
              <p className="text-[55.659px]  text-[#F8EED3] lg:hidden relative lg:text-[84px]  leading-[54.3px]  Hiragino lg:leading-[89px] tracking-[-4.453px]">
                The Best <br /> For Your <br />
                <span className="text-[#F6C94B]"> Guest.</span>
              </p>
              <div className="w-[85.46px] h-[0px] lg:block hidden border border-[#E9C348]"></div>
              <div className="w-[69px] lg:hidden h-[0px] border border-[#F6C94B]"></div>

              <div className="max-w-[237px] lg:max-w-[371px] relative z-10 text-[#F8EED3] text-[21px] lg:text-[45px] font-[300] font-['Gibson'] leading-[36px] lg:leading-[60px] tracking-[0.21px]">
                Professional & Innovative Concierge Services & Solutions.
              </div>
            </div>
            <div className="lg:hidden  w-full h-[280px] relative  bg-[#F6C94B]">
              <video
                playsInline
                src={video}
                loop
                autoPlay
                muted
                className="  absolute z-20  left-0 object-cover object-center top-0 w-full h-full aspect-auto mix-blend-darken"
              ></video>
            </div>
            <div className="bg-[#0B0B0B] h-[200px] w-full"></div>
          </div>
        </div>
        <div className="w-full lg:block hidden overflow-hidden lg:w-[50vw] ">
          <Fade>
            <video
              playsInline
              src={video}
              loop
              autoPlay
              muted
              className=" w-screen h-full lg:block hidden absolute top-0 -right-[200px] mix-blend-multiply object-cover"
            ></video>
          </Fade>
        </div>
      </section> */}
		</div>
	);
}

export default Home;
