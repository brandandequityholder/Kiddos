import { Link } from 'react-router-dom';
import { chevDown } from '../assets/icons';
import Logo from '../assets/logo.svg';
import ELC from '../assets/ELC.svg';
import KAS from '../assets/KAS.svg';
import MenuBurger from './MenuBurger';
import { useState } from 'react';
import { FaChevronRight, FaClosedCaptioning, FaXing } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6'; // fallback if chevDown isn't SVG
import { useEffect } from 'react';
import { handleScroll } from '../utils/FadeEffect';
import { useLocation } from 'react-router-dom';
function Nav() {
	const [collapsed, setCollapsed] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);
	const [collapsed2, setCollapsed2] = useState(false);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
	// 2. This useEffect runs every time the URL changes
	useEffect(() => {
		setCollapsed(false); // Closes the main menu
		setCollapsed2(false); // Closes the secondary menu
		setOpenDropdown(null); // Resets any open dropdowns
		document.body.style.overflow = ''; // Unlocks the scroll
	}, [location]);
	// ✅ Handle resize
	useEffect(() => {
		const handleResize = () => {
			const currentlyDesktop = window.innerWidth >= 1024;
			setIsDesktop(currentlyDesktop);
			console.log('resizing');

			if (currentlyDesktop) {
				document.body.style.overflow = '';
				setCollapsed(false);
				setCollapsed2(false);
				setOpenDropdown(null);
			} else {
				// 💡 when going to mobile, ensure we clear both overlays
				document.body.style.overflow = '';
				setCollapsed(false);
				setCollapsed2(false);
				setOpenDropdown(null);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// ✅ Body scroll lock when collapsed
	useEffect(() => {
		if (collapsed || collapsed2) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [collapsed, collapsed2]);

	// ✅ Toggle Kiddos dropdown (mobile only)
	const handleCollapse2 = () => {
		if (!isDesktop) {
			setCollapsed2((prev) => !prev);
		}
	};
	return (
		<div
			className={`w-full ${
				!isDesktop && (collapsed || collapsed2) ? 'z-[90] lg:z-50' : 'z-50'
			} absolute flex justify-center`}>
			<div
				className={`mx-auto w-full lg:max-w-[1284px] items-center flex justify-between lg:mt-[20px] lg:rounded-[33px] bg-[#004AAD] h-[81.9609px] ${
					!isDesktop && (collapsed || collapsed2)
						? 'fixed  lg:relative lg:top-[78px] top-0 left-0 z-[92]'
						: 'absolute top-[78px]'
				}`}>
				{/* LEFT SECTION WITH DROPDOWN */}
				{collapsed ? (
					<div className="  pl-[16px] lg:hidden justify-start text-white text-xs font-extrabold font-['League_Spartan'] leading-[37.20px] tracking-widest">
						CLOSE
					</div>
				) : (
					<div
						onClick={handleCollapse2}
						className={`relative ${
							!isDesktop && collapsed2 ? 'w-full' : 'w-fit'
						} lg:rounded-l-[33px] group min-w-[275px] space-x-[20px] flex items-center px-[22px] bg-[#043679] h-full`}>
						<img
							src={Logo}
							alt=''
						/>
						<div
							className={`flex flex-1 justify-between  items-end cursor-pointer`}>
							<div
								className={`w-[141.93px] h-[30.99px] justify-start text-white text-xs font-extrabold font-['League_Spartan'] leading-[13.99px] tracking-widest`}>
								KIDDOS <br /> SUMMER CAMP
							</div>

							{!isDesktop && collapsed2 ? (
								<div className=' my-auto'>
									<svg
										width='13'
										height='13'
										viewBox='0 0 13 13'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<line
											x1='1.12549'
											y1='0.711276'
											x2='11.7859'
											y2='11.4986'
											stroke='white'
											stroke-width='2'
										/>
										<line
											x1='0.707108'
											y1='12.0208'
											x2='12.0208'
											y2='0.70709'
											stroke='white'
											stroke-width='2'
										/>
									</svg>
								</div>
							) : (
								<>
									<div
										className={`mb-[5px] transform lg:block hidden transition-transform duration-100 group-hover:rotate-180`}>
										{chevDown || <FaChevronDown />}
									</div>
									<div
										className={`mb-[5px] transform lg:hidden block transition-transform duration-100 ${
											collapsed2 ? 'rotate-180' : 'rotate-0'
										}`}>
										<FaChevronDown className='text-white' />
									</div>
								</>
							)}
						</div>

						{/* DROPDOWN MENU (DESKTOP) */}
						<div className='lg:block hidden'>
							<div className='absolute right-0 top-full hidden group-hover:flex flex-col bg-[#043679] w-[90%] shadow-lg rounded-b-lg'>
								{[
									{
										img: Logo,
										label: 'KIDDOS SUMMER CAMP',
										link: 'https://Kiddossummercamp.com',
									},
									{
										img: ELC,
										label: 'KIDDOS EARLY LEARNING CENTER',
										link: 'https://Kiddoselc.com',
									},
									{
										img: KAS,
										label: 'KIDDOS AFTER SCHOOL',
										link: 'https://kiddosatlanta.com/after-school-programs',
									},
								].map((item, i) => (
									<Link
										to={item.link}
										key={i}
										target='_blank'
										rel='noopener noreferrer'
										className='px-5 border-t-[0.5px] border-opacity-20 border-white h-[86px] py-3 flex items-center justify-between text-white hover:bg-[#F8EA2B] hover:text-[#004AAD] text-xs tracking-wider transition-colors'>
										<div className='flex items-center space-x-[15px]'>
											<img
												src={item.img}
												alt=''
												className='w-[50px]'
											/>
											<p className="text-xs font-extrabold font-['League_Spartan'] leading-[14px] tracking-widest">
												{item.label.split(' ').map((word, i) => (
													<span key={i}>
														{word} {i % 3 === 2 && <br />}
													</span>
												))}
											</p>
										</div>
										<FaChevronRight className='transition-colors' />
									</Link>
								))}
							</div>
						</div>
					</div>
				)}

				{/* DESKTOP NAV LINKS */}
				<div className='pr-[28px] hidden lg:flex space-x-[68px]'>
					<div className='flex space-x-[56px]'>
						<Link to={''}>
							<div className="min-w-[53.16px] text-white text-xs font-bold font-['League_Spartan'] leading-[37.18px] tracking-[2.0926px]">
								HOME
							</div>
						</Link>

						{/* ABOUT US DROPDOWN */}
						<div className='relative group flex items-center space-x-[10px] text-white text-xs font-bold font-["League_Spartan"] leading-[37.18px] tracking-[2.0926px] cursor-pointer'>
							<Link>ABOUT US</Link>
							<div className='transform transition-transform duration-100 group-hover:rotate-180'>
								{chevDown || <FaChevronDown />}
							</div>
							<div className='absolute -left-1/2 top-full hidden group-hover:flex flex-col bg-[#043679] w-[240px] shadow-lg rounded-b-lg overflow-hidden'>
								<div className='w-full bg-[#004AAD] h-[23px]'></div>
								{[
									{
										name: 'THE KIDDOS WAY',
										link: 'values',
									},
									{
										name: 'OUR TEAM',
										link: 'team',
									},

									// {
									// 	name: 'CAREERS',
									// 	link: 'careers',
									// },
								].map((t, i) => (
									<Link
										key={i}
										to={t.link}
										className='px-5 border-t-[0.5px] border-opacity-20 border-white h-[86px] py-3 flex items-center justify-between text-white hover:bg-[#F8EA2B] hover:text-[#004AAD] text-xs tracking-wider transition-colors'>
										<span className="justify-start text-xs font-extrabold font-['League_Spartan'] leading-[14px] tracking-widest">
											{t.name}
										</span>
										<FaChevronRight className='transition-colors' />
									</Link>
								))}
							</div>
						</div>

						{/* CAMP DETAILS DROPDOWN */}
						<div className='relative group flex items-center space-x-[10px] text-white text-xs font-bold font-["League_Spartan"] leading-[37.18px] tracking-[2.0926px] cursor-pointer'>
							<Link>CAMP DETAILS</Link>
							<div className='transform transition-transform duration-100 group-hover:rotate-180'>
								{chevDown || <FaChevronDown />}
							</div>
							<div className='absolute -left-1/2 top-full hidden group-hover:flex flex-col bg-[#043679] w-[270px] shadow-lg rounded-b-lg overflow-hidden'>
								<div className='w-full bg-[#004AAD] h-[23px]'></div>
								{[
									{ name: 'SCHEDULE & ACTIVITIES', link: 'schedule' },
									{ name: 'RATES & ENROLLMENT', link: 'pricing' },
									{ name: 'PARENT & GUARDIAN INFO', link: 'policies' },
								].map((t, i) => (
									<Link
										key={i}
										to={t.link}
										className='px-5 border-t-[0.5px] border-opacity-20 border-white h-[86px] py-3 flex items-center justify-between text-white hover:bg-[#F8EA2B] hover:text-[#004AAD] text-xs tracking-wider transition-colors'>
										<span className="justify-start text-xs font-extrabold font-['League_Spartan'] leading-[14px] tracking-widest">
											{t.name}
										</span>
										<FaChevronRight className='transition-colors' />
									</Link>
								))}
							</div>
						</div>

						{/* FAQ */}
						<Link to={'faq'}>
							<div className="min-w-[53.16px] text-white text-xs font-bold font-['League_Spartan'] leading-[37.18px] tracking-[2.0926px]">
								FAQ’S
							</div>
						</Link>
					</div>

					{/* BUTTONS */}
					<div className='flex space-x-[24px]'>
						<Link
							target='_blank'
							rel='noopener noreferrer'
							to='https://kiddosatlanta.reg.eleyo.com/child-care/1/kiddos-summer'
							className='w-[101.95px] proxima text-[#004aad] flex items-center justify-center text-xs font-bold font-["Proxima_Nova"] leading-[37.18px] tracking-[2.093px] h-8 bg-[#f8ea2b] rounded-lg'>
							ENROLL
						</Link>
						<Link
							to={'contact'}
							className='min-w-[140px] proxima text-[#004aad] flex items-center justify-center text-xs font-bold font-["Proxima_Nova"] leading-[37.18px] tracking-[2.093px] h-8 bg-[#f8ea2b] rounded-lg'>
							CONTACT US
						</Link>
					</div>
				</div>

				{/* MOBILE BURGER */}
				{!collapsed2 && (
					<div className='lg:hidden z-[99] h-full  flex justify-center items-center pr-[24px]'>
						<div
							id='burger'
							className='z-[101] h-full w-fit flex justify-end relative cursor-pointer'
							onClick={() => setCollapsed(!collapsed)}>
							<MenuBurger
								key={1}
								collapsed={collapsed}
							/>
						</div>
					</div>
				)}

				{/* MOBILE FULLSCREEN NAV */}
				{collapsed && !isDesktop && (
					<div
						className={`fixed overflow-x-hidden lg:hidden top-[78px] left-0 right-0 bottom-0 bg-[#05306A] flex flex-col text-white overflow-y-auto transition-all duration-300 ${
							collapsed
								? 'opacity-100 pointer-events-auto z-[100]'
								: 'opacity-0 pointer-events-none -z-10'
						}`}>
						<Link
							to={''}
							onClick={() => setCollapsed(false)}
							className='p-[45px] border-b-[0.5px] border-opacity-25 border-b-blue-50 bg-[#043069] w-full'>
							<div className=" justify-start text-white text-lg font-extrabold font-['League_Spartan'] leading-5 tracking-[3.01px]">
								HOME
							</div>
						</Link>

						{/* CAMP DETAILS */}
						<div>
							<div
								className='p-[45px] font-["League_Spartan"]  border-b-[0.5px] border-opacity-25 border-b-blue-50 bg-[#032D66] w-full flex justify-between items-center cursor-pointer'
								onClick={() =>
									setOpenDropdown(openDropdown === 'camp' ? null : 'camp')
								}>
								<span className=" justify-start text-white text-lg font-extrabold font-['League_Spartan'] leading-5 tracking-[3.01px]">
									{' '}
									CAMP DETAILS{' '}
								</span>
								<span
									className={`transform transition-transform duration-200 ${
										openDropdown === 'camp' ? 'rotate-90' : ''
									}`}>
									<FaChevronRight></FaChevronRight>
								</span>
							</div>

							{openDropdown === 'camp' && (
								<div className='flex flex-col bg-[#043679]'>
									<Link
										to='schedule'
										onClick={() => setCollapsed(false)}
										className='ml-[41px] hover:ml-[30px] pl-[10px] pr-[41px] py-[22px]  hover:bg-[#F8EA2B]  hover:text-[#004AAD]'>
										<div className='w-full flex justify-between'>
											<div className="max-w-[339.78px] justify-start  text-lg font-normal font-['League_Spartan'] leading-5 tracking-[3.01px]">
												SCHEDULE & ACTIVITIES
											</div>
											<FaChevronRight></FaChevronRight>
										</div>
									</Link>
									<Link
										to={'pricing'}
										onClick={() => setCollapsed(false)}
										className='ml-[41px] hover:ml-[30px] pl-[10px] pr-[41px] py-[22px]  hover:bg-[#F8EA2B]  hover:text-[#004AAD]'>
										<div className='w-full flex justify-between'>
											<div className="max-w-[339.78px] justify-start  text-lg font-normal font-['League_Spartan'] leading-5 tracking-[3.01px]">
												RATES & ENROLLMENT
											</div>
											<FaChevronRight></FaChevronRight>
										</div>
									</Link>
									<Link
										to={'policies'}
										onClick={() => setCollapsed(false)}
										className='ml-[41px] hover:ml-[30px] pl-[10px] pr-[41px] py-[22px]  hover:bg-[#F8EA2B]  hover:text-[#004AAD]'>
										<div className='w-full flex justify-between'>
											<div className="max-w-[339.78px] justify-start  text-lg font-normal font-['League_Spartan'] leading-5 tracking-[3.01px]">
												PARENT & GUARDIAN INFO
											</div>
											<FaChevronRight></FaChevronRight>
										</div>
									</Link>
								</div>
							)}
						</div>

						{/* ABOUT US */}
						<div>
							<div
								className='p-[45px] border-b-[0.5px] border-opacity-25 border-b-blue-50 bg-[#032D66] w-full flex justify-between items-center cursor-pointer'
								onClick={() =>
									setOpenDropdown(openDropdown === 'about' ? null : 'about')
								}>
								<span className=" justify-start text-white text-lg font-extrabold font-['League_Spartan'] leading-5 tracking-[3.01px]">
									{' '}
									ABOUT US{' '}
								</span>
								<span
									className={`transform transition-transform duration-200 ${
										openDropdown === 'about' ? 'rotate-90' : ''
									}`}>
									<FaChevronRight></FaChevronRight>
								</span>
							</div>

							{openDropdown === 'about' && (
								<div className='flex flex-col bg-[#043679]'>
									<Link
										to={'values'}
										onClick={() => setCollapsed(false)}
										className='ml-[41px] hover:ml-[30px] pl-[10px] pr-[41px] py-[22px]  hover:bg-[#F8EA2B]  hover:text-[#004AAD]'>
										<div className='w-full flex justify-between'>
											<div className="max-w-[339.78px] justify-start  text-lg font-normal font-['League_Spartan'] leading-5 tracking-[3.01px]">
												THE KIDDOS WAY
											</div>
											<FaChevronRight></FaChevronRight>
										</div>
									</Link>
									<Link
										to={'team'}
										onClick={() => setCollapsed(false)}
										className='ml-[41px] hover:ml-[30px] pl-[10px] pr-[41px] py-[22px]  hover:bg-[#F8EA2B]  hover:text-[#004AAD]'>
										<div className='w-full flex justify-between'>
											<div className="max-w-[339.78px] justify-start  text-lg font-normal font-['League_Spartan'] leading-5 tracking-[3.01px]">
												OUR TEAM
											</div>
											<FaChevronRight></FaChevronRight>
										</div>
									</Link>

									{/* <Link
										to='careers'
										onClick={() => setCollapsed(false)}
										className='ml-[41px] hover:ml-[30px] pl-[10px] pr-[41px] py-[22px]  hover:bg-[#F8EA2B]  hover:text-[#004AAD]'>
										<div className="max-w-[339.78px] justify-start  text-lg font-normal font-['League_Spartan'] leading-5 tracking-[3.01px]">
											CAREERS
										</div>
									</Link> */}
								</div>
							)}
						</div>

						<Link
							to={'faq'}
							onClick={() => setCollapsed(false)}
							className='p-[45px] border-b-[0.5px] border-opacity-25 border-b-blue-50 bg-[#043069] w-full'>
							<div className=" justify-start text-white text-lg font-extrabold font-['League_Spartan'] leading-5 tracking-[3.01px]">
								FAQ’s
							</div>
						</Link>

						<div className='flex  relative flex-col w-full p-[46px] space-y-[26px]'>
							<Link
								target='_blank'
								rel='noopener noreferrer'
								to='https://kiddosatlanta.reg.eleyo.com/child-care/1/kiddos-summer'
								className='w-full flex font-["League_Spartan"] tracking-[3.232px] text-[18.525px] justify-center items-center bg-[#F8EA2B] text-[#004AAD] font-bold h-[49.4px] rounded-[6px]'>
								ENROLL
							</Link>
							<div className='w-full flex font-["League_Spartan"]  tracking-[3.232px] text-[18.525px] justify-center items-center bg-[#F8EA2B] text-[#004AAD] font-bold h-[49.4px] rounded-[6px]'>
								<Link
									to={'contact'}
									onClick={() => setCollapsed(false)}>
									CONTACT US
								</Link>
							</div>
						</div>
					</div>
				)}
				{/* MOBILE FULLSCREEN NAV ||*/}
				{collapsed2 && !isDesktop && (
					<div
						className={`fixed overflow-x-hidden lg:hidden top-[78px] left-0 right-0 bottom-0 bg-[#05306A] flex flex-col text-white overflow-y-auto transition-all duration-300 ${
							collapsed2
								? 'opacity-100 pointer-events-auto z-[100]'
								: 'opacity-0 pointer-events-none -z-10'
						}`}>
						<div className=' right-0 top-full  group-hover:flex flex-col bg-[#05306A] w-full  rounded-b-lg'>
							{[
								{
									img: Logo,
									label: (
										<>
											KIDDOS <br />
											SUMMER CAMP
										</>
									),
									link: 'https://Kiddossummercamp.com',
								},
								{
									img: ELC,
									label: (
										<>
											KIDDOS <br />
											EARLY LEARNING <br />
											CENTER
										</>
									),
									link: 'https://Kiddoselc.com',
								},
								{
									img: KAS,
									label: (
										<>
											KIDDOS <br />
											AFTER SCHOOL
										</>
									),
									link: 'https://kiddosatlanta.com/after-school-programs',
								},
							].map((item, i) => (
								<Link
									key={i}
									target='_blank'
									rel='noopener noreferrer'
									to={item.link}
									className='p-[50px] border-b-[0.5px] w-full border-opacity-20 border-white  flex items-center justify-between text-white hover:bg-[#F8EA2B] hover:text-[#004AAD] text-xs tracking-wider transition-colors'>
									<div className='flex items-center space-x-[34px]'>
										<img
											src={item.img}
											alt=''
											className='w-[72px]'
										/>
										<div className="text-[17.277px] leading-[20.1px] font-extrabold font-['League_Spartan']  tracking-[3px]">
											{item.label}
										</div>
									</div>
									<FaChevronRight className='transition-colors' />
								</Link>
							))}
						</div>
					</div>
				)}
			</div>

			{/* MOBILE FULLSCREEN NAV OVERLAY */}
		</div>
	);
}

export default Nav;
