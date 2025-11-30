// import { FooterLogo } from '../assets/icons'
import { Link } from 'react-router-dom'
import Footerlogo from '../assets/FooterLogo.png'
import { mailTo } from '../utils/functions'
import { email, location, phone } from '../assets/icons';
import footerVid from '../assets/FooterVideo.mp4';
import LogoFooter from '../assets/Kiddos/LogoFooter.svg';
// Socials
import { instagram, LinkedIn, Twitter, facebook } from '../assets/icons';
import LastSec from '../pages/Home/LastSec';
function Footer() {
	const links = [
		{
			name: 'WELCOME',
			link: '/',
		},
		{
			name: 'Services',
			link: '/services',
		},
		{
			name: 'ABOUT US',
			link: '/about',
		},
	];
	return (
		<footer className='overflow-x-hidden'>
			<LastSec></LastSec>
			<div className='  lg:mt-[260px] lg:-mb-[70px] lg:h-fit  mt-[131px] relative '>
				<video
					playsInline
					src={footerVid}
					muted
					webkit-playsinline='true'
					autoPlay
					loop
					preload='auto'
					style={{ width: '100%', display: 'block' }}
					className='bg-[#fdf9ef] w-full bg-[#] lg:h-[725.653px] absolute -top-[240px] lg:-top-[400px] lg:w-full object-center    '></video>{' '}
				<div className='bg-white  lg:mb-[70px] w-full relative   bottom-0 '>
					<div className='flex py-[50px]  space-y-[22px] lg:space-y-0 px-[50px]  w-full lg:flex-row flex-col max-w-[1293.38px] mx-auto justify-between lg:px-[100px] lg:py-[60px]'>
						<img
							src={LogoFooter}
							alt=''
							className='lg:w-fit w-[211.593px]'
						/>
						<div className='flex space-y-[30px] lg:space-y-0 flex-col lg:flex-row lg:space-x-[30px]'>
							<div className='flex space-y-[20px] flex-col lg:space-y-[10px]'>
								<p className=' justify-start  text-[#004AAD] lg:text-[15.305px] text-[11.312px] font-normal MadeGentle uppercase leading-6 tracking-[3.52px]'>
									KIDDOS SUMMER CAMP{' '}
								</p>
								<p className="max-w-96 justify-start text-[#004AAD] text-[12px] lg:text-[15px] font-medium font-['League_Spartan'] leading-[16.99px] lg:leading-[22.989px]">
									A day camp located in Buckhead for 150 campers - rising
									Kindergarten through 6th grade. Each summer is filled with
									over 720 activity choices - ranging from Arts, Sports and
									Cooking to Wood Working, Gymnastics and Science. And with
									Campers Choice campers tailor their day, their way!
									<br />
								</p>
							</div>
							<div className='flex flex-col space-y-[21px]'>
								{/* Location */}
								<div className='flex space-x-[34px] items-start'>
									<div className='mt-[5px] w-[15px]'>{location}</div>
									<a
										href='https://www.google.com/maps/place/3260+Northside+Dr+NW,+Atlanta,+GA+30305'
										target='_blank'
										rel='noopener noreferrer'
										className="max-w-[464.73px] justify-start text-blue-800 text-sm font-normal font-['League_Spartan'] leading-6 hover:underline">
										Atlanta Classical Academy
										<br />
										3260 Northside Dr NW, Atlanta, GA 30305
									</a>
								</div>

								{/* Email */}
								<div className='flex space-x-[34px] items-start'>
									<div className='mt-[5px] w-[15px]'>{email}</div>
									<a
										href='mailto:Support@kiddosdaycamp.com'
										className="max-w-[464.73px] justify-start text-blue-800 text-sm font-normal font-['League_Spartan'] leading-6 hover:underline">
										Support@kiddosdaycamp.com
									</a>
								</div>

								{/* Phone */}
								<div className='flex space-x-[34px] items-start'>
									<div className='mt-[5px] w-[15px]'>{phone}</div>
									<a
										href='tel:4043435667'
										className="max-w-[464.73px] justify-start text-blue-800 text-sm font-normal font-['League_Spartan'] leading-6 hover:underline">
										404.343.5667
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='w-screen flex lg:flex-row flex-col lg:h-[36.98px] text-white text-xs font-normal MadeGentle uppercase leading-6 tracking-[2.76px]'>
						<div className='lg:flex-1  h-[53.707px] lg:text-base text-[12.42px] lg:h-full flex items-center justify-center bg-[#C9368A]'>
							KIDDOS ATLANTA
						</div>
						<div className='lg:flex-1 h-[53.707px] lg:text-base text-[12.42px] lg:h-full flex items-center justify-center bg-[#00B6BE]'>
							KIDDOS EARLY LEARNING CENTER
						</div>
						<div className='lg:flex-1 h-[53.707px] lg:text-base text-[12.42px] lg:h-full flex items-center justify-center bg-[#F58235]'>
							KIDDOS AFTERSCHOOL
						</div>
						<div className='lg:flex-1 h-[53.707px] lg:text-base text-[12.42px] lg:h-full flex items-center justify-center bg-[#8BC53F]'>
							KIDDOS DAY CAMP
						</div>
					</div>

					<div className='lg:h-[70px] py-[33px] space-y-[20px] lg:py-0  lg:px-[80px] flex lg:flex-row flex-col justify-end w-full bg-[#004AAD]'>
						<div className='flex lg:w-fit w-full justify-center items-center'>
							<p className=' justify-start text-white text-[11.312px]  lg:text-base font-normal MadeGentle uppercase leading-6 tracking-[3.52px]'>
								@Kiddoscamp
							</p>

							{/* Socials */}
							<div className='flex  flex-row-reverse mr-[20px] lg:mr-0 space-x-[20px] lg:space-x-[26px]'>
								<button className='ml-[26px] lg:w-fit w-[14.787px]'>
									{instagram}
								</button>

								<button>{facebook}</button>
							</div>
						</div>
						<div className='lg:hidden w-full flex items-end justify-center '>
							<div className='max-w-[276px]  flex justify-center items-center  mx-0 text-center w-fit h-8  text-white text-xs font-normal MadeGentle uppercase leading-[17.01px] tracking-[2.60px]'>
								<p>© 2025 KIDOOS ATLANTA, LLC. </p>
							</div>
						</div>
					</div>
				</div>
				{/* <div>
				<div className="flex  items-center justify-between space-x-[10px] pb-[50px] lg:pb-0  lg:px-0">
          {links.map((el, index) => (
            <Link
              key={index}
              to={el.link}
              className="text-orange-100 text-[11px] lg:text-xs font-semibold font-['Gibson'] uppercase tracking-[6px]"
            >
              {el.name}
            </Link>
          ))}
          <div
            onClick={mailTo}
            className=" text-center cursor-pointer items-center justify-center lg:flex hidden h-[43px] bg-[#202020]"
          >
            <p className="text-amber-300 text-[12px] px-[10px] font-semibold font-['Gibson'] uppercase tracking-[6.12px]">
              CONTACT
            </p>
          </div>
        </div>
        <div
          onClick={() =>
            window.open(
              "mailto:email@example.com?subject=I'm%20Interested%20in%20learning%20more%20about%20Capital%20Concierge",
              '_blank',
            )
          }
          className="w-full lg:hidden justify-center flex items-center h-[118px] bg-[#202020]"
        >
          <p className=" text-center text-amber-300 text-[17.12px] font-semibold font-['Gibson'] uppercase tracking-[8.73px]">
            CONTACT
          </p>
        </div>
			</div> */}
			</div>
		</footer>
	);
}

export default Footer
