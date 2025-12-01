import firstCurve from './firstCurve.svg';
import { useState } from 'react';
import lastCurve from './LastCurve.svg';
import map from './map.png';
import secCurve from './secCurve.svg';
import AnythingElse from '../../components/AnythingElse';
import emailjs from 'emailjs-com';

function Contact() {
	const [isOpen, setIsOpen] = useState(false);
	const [status, setStatus] = useState('');
	const [selectedOption, setSelectedOption] = useState(
		'Choose from the list....'
	);
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phoneNumber: '',
		message: '',
	});
	const [errors, setErrors] = useState({});

	const options = [
		'General Inquiry',
		'Partnership / Collaboration',
		'Enrollment Questions',
		'Feedback / Complaints',
		'Other',
	];

	const toggleDropdown = () => setIsOpen(!isOpen);

	const handleSelect = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
		setErrors((prev) => ({ ...prev, category: false }));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => ({ ...prev, [name]: false }));
	};

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const validate = () => {
		const newErrors = {};

		if (selectedOption === 'Choose from the list....')
			newErrors.category = true;
		if (!formData.fullName.trim()) newErrors.fullName = true;

		if (!formData.email.trim()) {
			newErrors.email = true;
		} else if (!validateEmail(formData.email)) {
			newErrors.email = 'invalid'; // special flag for invalid format
		}

		if (!formData.message.trim()) newErrors.message = true;

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validate()) return;

		setStatus('sending');

		const templateParams = {
			category: selectedOption,
			fullName: formData.fullName,
			email: formData.email,
			phoneNumber: formData.phoneNumber,
			message: formData.message,
		};

		emailjs
			.send(
				'service_nuvhrhi', // your Service ID
				'template_porm1gg', // your Template ID
				templateParams,
				'fms-Ts9Vk_Al7EVMr' // your Public Key
			)
			.then(
				() => {
					setStatus('success');
					setFormData({
						fullName: '',
						email: '',
						phoneNumber: '',
						message: '',
					});
					setSelectedOption('Choose from the list....');
					setErrors({});
				},
				() => setStatus('error')
			);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSubmit(e);
		}
	};

	return (
		<div>
			{status === 'success' && (
				<div className='fixed h-full flex flex-col space-y-[90px] items-center justify-center top-0 w-full z-[99] bg-[#004AAD]'>
					<div className='max-w-[559.12px]   text-center justify-center'>
						<span className='text-[#f8ea2b]  text-3xl lg:text-5xl font-normal MadeGentle leading-[40px] lg:leading-[57.33px]'>
							Please allow <br />
							24 hours for a response!
						</span>{' '}
						<br /> <br />
						<span className='text-white  text-3xl lg:text-5xl font-normal MadeGentle leading-[40px] lg:leading-[57.33px]'>
							Check your email for confirmation.
							<br />
						</span>
						<span className='text-[#f8ea2b]  text-3xl lg:text-5xl font-normal MadeGentle leading-[40px] lg:leading-[57.33px]'>
							(Check Spam Too!)
						</span>
					</div>
					<div
						onClick={() => setStatus('')}
						className='lg:px-0 px-[15px] lg:w-[425px] cursor-pointer button flex justify-center items-center h-[60px] bg-[#f8ea2b]  text-[#004aad] text-[16px] lg:text-xl font-bold font-["Montserrat"] leading-[69.29px] tracking-[3.90px] rounded-md'>
						SEND ANOTHER MESSAGE
					</div>
				</div>
			)}
			<section className='w-full relative bg-[#0B3D80] mt-[78px] pt-[78px]'>
				<div className='max-w-[1243.406px] w-full relative lg:px-0  pb-[50px] lg:pb-[200px] pt-[60px] lg:pt-[190px] lg:pl-[120px] mx-auto'>
					<div className='space-y-[40px] pb-[60px] px-[66px] lg:px-0 lg:pb-[120px]'>
						<p className="max-w-[1019px] text-white text-[42px] lg:text-[64px] font-bold font-['League_Spartan'] leading-[44.5px] lg:leading-[67px]">
							Any <br className='lg:hidden' /> Questions,{' '}
							<br className='lg:hidden' /> Kudos, <br className='lg:hidden' />
							Concerns <br /> or Collabs? <br className='lg:hidden' />
							<span className='text-[#86d24a]'>Let’s Connect!</span>
						</p>
						<p className="max-w-[958px] text-white text-[14px] lg:text-xl font-medium font-['Montserrat'] leading-[33.1px] lg:leading-[33.10px]">
							Kiddos has been recognized as one of Buckhead’s best summer camps
							– and we can’t wait to show your family why. If you’re looking for
							a summer camp in Atlanta that combines high-energy activities,
							learning experiences, and a caring atmosphere, you’ve found it!
						</p>
					</div>

					<form
						onSubmit={handleSubmit}
						className='space-y-[68px] lg:space-y-[91px]'>
						<div className='space-y-[30px]  lg:space-y-[44px]'>
							{/* --- Dropdown --- */}
							<div className='space-y-[15px] lg:space-y-[9px]'>
								<div className="w-full px-[66px] lg:px-0  lg:max-w-[1019px] text-white text-[25px] lg:text-[38px] font-bold font-['League_Spartan'] lg:leading-[67px]">
									How can we help you?
								</div>
								<div className='relative px-[48px] lg:px-0  w-full max-w-[998px]'>
									<div
										onClick={toggleDropdown}
										className={`px-[27px] lg:px-[43px] flex justify-between items-center h-[58px] lg:h-[99px] bg-[#0b3163] cursor-pointer select-none transition-all duration-300 ${
											errors.category
												? 'ring-2 ring-red-500'
												: 'focus:ring-2 focus:ring-[#86d24a]'
										}`}>
										<p className="text-white text-[14.586px] lg:text-[30px] font-light font-['League_Spartan'] leading-[25px] lg:leading-[67px]">
											{selectedOption}
										</p>
										<div className='w-fit h-fit lg:block hidden'>
											<svg
												className={`transition-transform duration-300 ${
													isOpen ? 'rotate-180' : 'rotate-0'
												}`}
												width='33'
												height='28'
												viewBox='0 0 33 28'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M16.0215 27.75L1.76848e-05 -3.01796e-06L32.043 -2.1668e-07L16.0215 27.75Z'
													fill='#D9D9D9'
												/>
											</svg>
										</div>
										<div className='w-fit h-fit lg:hidden '>
											<svg
												width='13'
												height='11'
												viewBox='0 0 13 11'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M6.14965 10.6514L-2.24892e-08 -0.000149932L12.2993 -0.000148856L6.14965 10.6514Z'
													fill='#D9D9D9'
												/>
											</svg>
										</div>
									</div>

									<div
										className={`absolute z-20 left-0 w-full bg-[#0b3163] overflow-hidden transition-all duration-500 ease-in-out ${
											isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
										}`}>
										{options.map((option, index) => (
											<div
												key={index}
												onClick={() => handleSelect(option)}
												className='px-[43px] py-4 text-white text-[18px]  lg:text-[26px] font-["League_Spartan"] hover:bg-[#0b4a99] cursor-pointer border-t border-[#0e4b9b]'>
												{option}
											</div>
										))}
									</div>
								</div>
							</div>

							{/* --- Full Name --- */}
							<div className='space-y-[15px]  w-full lg:space-y-[9px]'>
								<div className="w-full px-[66px] lg:px-0  lg:max-w-[1019px] text-white text-[25px] lg:text-[38px] font-bold font-['League_Spartan'] lg:leading-[67px]">
									Full Name
								</div>
								<div className='relative   px-[48px] lg:px-0  w-full max-w-[998px]'>
									<input
										name='fullName'
										type='text'
										onKeyDown={handleKeyDown}
										value={formData.fullName}
										onChange={handleChange}
										placeholder='My Name is...'
										className={`w-full px-[27px] lg:px-[43px] h-[58px] lg:h-[99px] bg-[#0b3163] text-white placeholder:text-[#ffffff7b] text-[14.586px] lg:text-[30px] font-light font-['League_Spartan'] leading-[25px] lg:leading-[67px] outline-none border-none transition-all duration-300 ${
											errors.fullName
												? 'ring-2 ring-red-500'
												: 'focus:ring-2 focus:ring-[#86d24a]'
										}`}
									/>
								</div>
							</div>

							{/* --- Email Address --- */}
							<div className='space-y-[15px] lg:space-y-[9px]'>
								<div className="w-full px-[66px] lg:px-0  lg:max-w-[1019px] text-white text-[25px] lg:text-[38px] font-bold font-['League_Spartan'] lg:leading-[67px]">
									Email Address
								</div>
								<div className='relative  px-[48px] lg:px-0  w-full max-w-[998px]'>
									<input
										name='email'
										type='email'
										onKeyDown={handleKeyDown}
										value={formData.email}
										onChange={handleChange}
										placeholder='My Email Address is...'
										className={`w-full px-[27px] lg:px-[43px] h-[58px] lg:h-[99px] bg-[#0b3163] text-white placeholder:text-[#ffffff7b] text-[14.586px] lg:text-[30px] font-light font-['League_Spartan'] leading-[25px] lg:leading-[67px] outline-none border-none transition-all duration-300 ${
											errors.email
												? 'ring-2 ring-red-500'
												: 'focus:ring-2 focus:ring-[#86d24a]'
										}`}
									/>
									{errors.email === 'invalid' && (
										<p className='text-red-400 text-[12px] lg:text-[16px] mt-1 ml-[10px] font-[Montserrat]'>
											Please enter a valid email address.
										</p>
									)}
								</div>
							</div>
							<div className='space-y-[15px] lg:space-y-[9px]'>
								<div className="w-full px-[66px] lg:px-0  lg:max-w-[1019px] text-white text-[25px] lg:text-[38px] font-bold font-['League_Spartan'] lg:leading-[67px]">
									Phone Number
								</div>
								<div className='relative  px-[48px] lg:px-0  w-full max-w-[998px]'>
									<input
										name='phoneNumber'
										type='phoneNumber'
										onKeyDown={handleKeyDown}
										value={formData.phoneNumber}
										onChange={handleChange}
										placeholder='My Phone Number is...'
										className={`w-full px-[27px] lg:px-[43px] h-[58px] lg:h-[99px] bg-[#0b3163] text-white placeholder:text-[#ffffff7b] text-[14.586px] lg:text-[30px] font-light font-['League_Spartan'] leading-[25px] lg:leading-[67px] outline-none border-none transition-all duration-300 ${
											errors.email
												? 'ring-2 ring-red-500'
												: 'focus:ring-2 focus:ring-[#86d24a]'
										}`}
									/>
									{/* {errors.email === 'invalid' && (
										<p className='text-red-400 text-[12px] lg:text-[16px] mt-1 ml-[10px] font-[Montserrat]'>
											Please enter a valid email address.
										</p>
									)} */}
								</div>
							</div>

							{/* --- Message --- */}
							<div className='space-y-[15px] lg:space-y-[9px]'>
								<div className="w-full px-[66px] lg:px-0  lg:max-w-[1019px] text-white text-[25px] lg:text-[38px] font-bold font-['League_Spartan'] lg:leading-[67px]">
									Message
								</div>
								<div className='relative  px-[48px] lg:px-0  w-full max-w-[998px]'>
									<textarea
										name='message'
										onKeyDown={handleKeyDown}
										value={formData.message}
										onChange={handleChange}
										placeholder='Talk to us... :)'
										className={`w-full px-[27px] lg:px-[43px] pt-[20px] lg:pt-[30px] h-[150px] lg:h-[349px] bg-[#0b3163] text-white placeholder:text-[#ffffff7b] text-[14.586px] lg:text-[30px] font-light font-['League_Spartan'] leading-[25px] lg:leading-[67px] outline-none border-none resize-none transition-all duration-300 ${
											errors.message
												? 'ring-2 ring-red-500'
												: 'focus:ring-2 focus:ring-[#86d24a]'
										}`}
									/>
								</div>
							</div>
						</div>
						{/* <div>{status}</div> */}
						{/* --- Submit Button --- */}
						<button
							type='submit'
							className='w-[261.287px] lg:mx-0 mx-auto flex items-center justify-center h-[60.207px]    lg:ml-[9px] text-[#004AAD] text-[16px] lg:text-xl font-bold font-["Montserrat"] leading-[69.32px] tracking-[3.90px] bg-[#F8EA2B] rounded-[6px] hover:scale-[1.03] transition-transform duration-300'>
							<p>SEND AWAY!</p>
						</button>
					</form>
				</div>

				<img
					src={firstCurve}
					alt=''
					className='w-full -mb-1'
				/>
			</section>
			<section className='w-full relative bg-[#F8FBFF] '>
				<div className='max-w-[1243.406px] space-y-[31px] lg:space-y-[98px] w-full relative lg:px-0 px-[66px] pb-[50px]  lg:pb-[200px] pt-[60px] lg:pt-[190px] lg:pl-[120px] mx-auto'>
					<div className='space-y-[27px] lg:space-y-[35px]'>
						<div className=" w-full max-w-[1019px] justify-center text-[#004aad] text-[42px] lg:text-[64px] font-bold font-['League_Spartan'] leading-[44.5px] lg:leading-[67px]">
							Our Location for Summer ‘26
						</div>
						<div className="w-full max-w-[334px] lg:max-w-[977px] justify-center text-[#004aad] text-[14px] lg:text-[38px] font-normal font-['League_Spartan'] leading-[33.1px] lg:leading-[50px]">
							Please note, while we stay around the same area our location is
							subject to change yearly in effort to provide an improved Kiddos
							experience with every passing year.
						</div>
					</div>
					<div className='flex lg:flex-row flex-col  space-y-[29px] lg:space-y-0  h-fit lg:h-[437px] lg:space-x-[49px]'>
						<div className='relative'>
							<div className='absolute h-full w-full flex items-center justify-center'>
								<svg
									width='93'
									height='115'
									viewBox='0 0 93 115'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M60.9154 36.4348C59.2592 44.0529 52.186 64.3309 47.252 73.4398C41.1794 64.1411 29.0342 41.9003 29.0342 27.3261C29.0342 9.10824 39.851 9.1081 47.252 8.53879C54.653 7.96949 63.7619 23.341 60.9154 36.4348Z'
										fill='#F8EA2B'
									/>
									<path
										d='M60.4806 71.9659C59.1458 71.2295 57.623 70.8413 56.2179 70.2204C54.6239 69.516 53.4062 70.0353 52.8587 71.8504C56.5499 71.8343 59.9369 72.4591 61.7605 76.2101C60.3488 76.8404 60.3488 76.8404 59.8479 78.4671C59.2893 80.2812 58.2671 80.9003 56.1596 80.622C56.494 80.1994 56.783 79.7429 57.022 79.2602C57.1308 78.8069 57.1794 78.3413 57.1665 77.8753C56.601 77.9585 55.8364 77.8454 55.5158 78.1695C55.0368 78.769 54.6755 79.4532 54.4509 80.1863C53.8677 81.6179 53.4499 81.7897 51.8442 81.0289C52.3037 80.5452 52.6943 80.0009 53.0051 79.4111C53.0813 78.874 53.0518 78.3273 52.9181 77.8015C52.3901 77.9869 51.6633 78.0182 51.3743 78.389C50.7299 79.2162 50.3479 80.2413 49.7698 81.1279C49.4402 81.5165 49.0616 81.8609 48.6434 82.1526L48.2706 81.7635C49.0032 80.5429 49.7359 79.3221 50.4688 78.101C48.9385 77.2668 48.45 77.428 47.8062 78.8262C47.4072 79.8011 46.921 80.7381 46.3536 81.6261C46.1243 81.9518 45.4066 81.9354 44.9115 82.0749C44.7718 81.664 44.7123 81.2303 44.7363 80.7972C44.8827 80.2548 45.3439 79.8 45.5096 79.2587C45.5759 78.8075 45.573 78.3488 45.501 77.8984C44.9458 78.0297 44.1875 77.9832 43.881 78.3319C43.3976 78.9893 43.0271 79.7221 42.7844 80.5006C42.1245 82.1596 41.8758 82.2675 39.8487 81.3528C40.3209 80.6668 40.7375 79.9444 41.0945 79.1923C41.2346 78.609 41.2917 78.0089 41.264 77.4097C40.6411 77.6132 39.8026 77.6368 39.4459 78.0623C38.9828 78.7939 38.6235 79.586 38.3783 80.416C37.7924 81.7736 37.4162 81.8538 36.1769 80.8579C36.6963 80.0639 37.2045 79.2561 37.7451 78.4705C38.169 77.8544 38.5207 77.1453 37.5635 76.8714C37.1624 76.7566 36.3883 77.2247 36.0789 77.6443C35.2832 78.7236 34.6526 79.9238 33.9543 81.0786L32.3574 80.4611C33.1624 79.1929 33.9257 78.0622 34.6028 76.8822C34.7679 76.4554 34.8681 76.0065 34.9002 75.5501C34.4114 75.6327 33.7191 75.5404 33.4699 75.8289C32.5349 76.9116 31.7446 78.1188 30.8454 79.3543C29.8189 78.0004 29.648 77.5315 30.2845 76.5562C30.7526 75.7773 31.4025 75.1229 32.1788 74.6487C34.3757 73.4792 36.557 72.1442 39.248 72.4804C39.5091 72.513 40.0445 72.151 40.0573 71.9476C40.0424 71.7689 39.9869 71.5959 39.895 71.4418C39.8032 71.2876 39.6773 71.1564 39.5271 71.058C39.1765 70.9073 38.7909 70.8568 38.4133 70.9122C34.9786 71.1145 31.6858 72.3499 28.9689 74.4557C28.6033 74.6889 28.321 75.0315 28.1624 75.4345C27.4501 78.5703 28.7428 81.5774 31.8734 82.4494C34.3877 83.1179 36.9705 83.4966 39.5712 83.5779C45.1078 83.8054 50.6768 83.9248 56.1121 82.582C58.2167 82.1247 60.2446 81.3681 62.1336 80.3356C64.6255 78.8658 64.9558 76.7343 63.288 74.3245C62.54 73.3396 61.5808 72.5337 60.4806 71.9659Z'
										fill='#004AAD'
									/>
									<path
										d='M30.1657 42.1875C31.648 46.6505 33.3641 51.0328 35.3069 55.3164C36.7572 58.6922 38.3919 61.9988 40.1214 65.2423C41.3616 67.5683 42.8772 69.75 44.3036 71.9746C44.8915 72.8916 44.9881 74.385 46.4452 74.3931C47.9706 74.4016 47.7955 72.8817 48.2744 71.9599C49.8166 68.9914 51.2557 65.9623 52.9432 63.0781C54.9392 59.3913 56.5788 55.5234 57.84 51.5267C59.3645 47.4237 60.6779 43.2458 61.7752 39.0091C62.6338 35.8725 63.0014 32.6224 62.865 29.3738C62.4177 23.6034 60.9695 18.0138 56.742 13.6079C54.3806 11.1467 51.8226 8.7623 48.3076 8.4495C44.2695 8.09016 40.2303 8.1298 36.4344 10.2906C33.6488 11.8764 31.3925 13.9 30.3852 16.8041C29.2981 20.3847 28.5163 24.0506 28.0483 27.7626C27.4786 32.7553 28.7244 37.5343 30.1657 42.1875ZM30.6529 21.0649C31.038 19.7794 31.541 18.5295 31.9521 17.2511C33.4203 12.686 38.934 10.2743 42.9908 10.4062C43.7597 10.4353 44.5297 10.4012 45.2929 10.3041C47.8941 9.95699 50.0245 10.9372 52.1672 12.3114C54.2287 13.7155 56.0236 15.4739 57.4681 17.5046C57.609 17.7194 57.7018 17.962 57.74 18.2159C57.7782 18.4698 57.761 18.7289 57.6895 18.9755C57.3713 18.7865 57.0631 18.4639 56.7326 18.4393C56.218 18.4008 55.4622 19.8387 55.8451 20.1484C56.4308 20.5606 57.0967 20.8455 57.7998 20.9845C58.2875 21.1325 58.7361 21.3864 59.1137 21.7279C59.4912 22.0694 59.7883 22.4901 59.9834 22.9598C60.1786 23.4294 60.267 23.9364 60.2424 24.4442C60.2178 24.952 60.0807 25.4481 59.841 25.8967C58.5741 25.0872 57.3766 24.2701 56.1211 23.5543C55.7821 23.3611 54.6371 24.7421 54.845 24.862C56.1335 25.5774 57.4602 26.2222 58.8191 26.7936C59.4991 27.0523 60.2286 27.1553 60.9539 27.0949C60.8838 28.4055 60.8136 29.7184 60.7429 31.0414C59.8185 30.4817 58.851 29.996 57.8496 29.5891C57.4596 29.4422 56.473 30.9445 56.7209 31.0772C57.9557 31.738 59.2615 32.267 60.6179 32.8764L60.6458 32.8559C60.5845 34.0035 60.5227 35.1598 60.4595 36.3416C58.781 35.5481 57.1874 34.7432 55.5406 34.0673C55.2689 33.9558 54.5285 35.5327 54.774 35.6475C56.4446 36.4291 58.1603 37.1147 60.1424 37.9496C60.0357 38.5898 59.9025 39.7197 59.6508 40.8228C59.2612 42.531 55.3978 40.8999 54.6981 40.676C54.2331 40.5272 53.5277 42.0184 53.925 42.2177C55.366 42.9405 56.8808 43.5169 58.519 44.2127C58.1491 45.3989 57.783 46.6632 57.3802 47.9398C55.9177 47.2963 54.7853 46.7753 53.6176 46.3623C53.3099 46.2535 52.6955 48.1143 53.0206 48.2264C54.1232 48.6063 56.8629 49.5193 56.7307 49.8912C56.4306 50.7359 56.0996 51.5699 55.7644 52.4023C54.7382 51.9819 53.6898 51.6174 52.6239 51.3103C52.2102 51.2017 51.1585 52.5202 51.3451 52.6309C52.5302 53.2638 53.7855 53.7562 55.0854 54.0981C54.7954 54.8343 54.5153 55.5738 54.2651 56.3233C53.8088 57.6903 53.0022 57.8821 51.823 57.4998C51.3129 57.3595 50.8193 57.1651 50.3507 56.9199C49.6534 56.5116 49.2899 58.5314 49.7044 58.684C50.7219 59.0584 52.7416 59.8505 52.6665 60.059C51.9843 61.9526 51.3681 62.2914 48.5965 61.3662C48.2775 61.2598 47.9337 61.0096 47.6492 61.0659C47.1376 61.1671 46.703 62.5179 47.0871 62.7651C47.62 63.0877 48.2037 63.3181 48.8135 63.4467C49.4534 63.5372 50.0993 63.5782 50.7455 63.5694C49.951 64.8 49.3157 65.9064 48.5372 66.9015C48.3494 67.1417 47.6734 67.1021 47.2486 67.0315C46.7423 66.9473 46.2744 66.5978 45.771 66.5461C45.4926 66.5176 45.0037 67.6779 45.1888 67.8927C45.4629 68.1653 45.7761 68.3958 46.1182 68.5768C46.5988 68.8751 47.0964 69.1464 47.5868 69.4291C47.0231 70.1888 46.4083 70.9095 45.7466 71.586C44.9867 70.381 44.2322 69.251 43.5452 68.0816C41.9897 65.434 40.4134 62.7961 38.9538 60.096C38.1855 58.6748 37.6419 57.1323 37.0017 55.6426C35.7903 52.8235 34.3549 50.0752 33.4252 47.1663C31.8736 42.5943 30.6132 37.9291 29.6514 33.1986C29.0186 29.132 29.3618 24.9736 30.6529 21.0649Z'
										fill='#004AAD'
									/>
									<path
										d='M42.4889 36.8152C46.0516 38.5011 48.2419 38.0744 49.9235 34.3484C50.414 32.8638 50.6696 31.3119 50.681 29.7488C50.6585 29.462 50.6561 29.174 50.6739 28.8869C50.7591 27.6504 50.4775 26.4163 49.8641 25.3385C49.2507 24.2606 48.3327 23.3869 47.2247 22.8262C44.9385 21.7131 42.7375 22.1904 40.7698 24.1304C40.6679 24.2309 38.1527 27.5426 38.0198 29.3535C37.8458 30.9134 38.1885 32.4873 38.9955 33.8346C39.8025 35.182 41.0294 36.2288 42.4889 36.8152ZM41.2904 25.6337C41.7472 25.0467 42.3681 24.6079 43.0747 24.3725C43.7812 24.1371 44.5419 24.1157 45.2606 24.3109C46 24.4491 46.6857 24.791 47.2402 25.2981C47.7947 25.8052 48.1957 26.4571 48.3977 27.1798C48.6442 28.2396 48.7589 29.3257 48.7391 30.4134C48.7466 31.0304 48.7092 31.6471 48.6272 32.2587C48.1134 34.7847 46.7147 36.5039 43.2708 35.0719C39.6402 33.5623 38.8216 28.5562 41.2904 25.6337Z'
										fill='#004AAD'
									/>
								</svg>
							</div>
							<img
								src={map}
								alt=''
								className=' w-[346px] lg:w-[573px]  lg:h-full h-[264px]'
							/>
						</div>
						<div className='h-full text-center lg:text-start lg:pl-0  flex flex-col justify-center space-y-[61px]'>
							<div className="w-full lg:block hidden  justify-center text-[#004aad] text-[38px] font-normal font-['League_Spartan'] leading-[50px]">
								Atlanta Classical Academy
								<br />
								<br />
								3260 Northside Dr NW, Atlanta, GA 30305
							</div>
							<div className='w-full max-w-[303px] lg:hidden  justify-center'>
								<span className="text-[#004aad] text-[21px] font-bold font-['Montserrat'] leading-7">
									Atlanta Classical Academy
									<br />
								</span>
								<span className="text-[#004aad] text-[21px] font-medium font-['Montserrat'] leading-7">
									3260 Northside Dr NW, Atlanta, GA 30305
								</span>
							</div>

							<button className='w-full lg:mx-0 mx-auto max-w-[261.41px] flex items-center h-[60.24px] bg-[#004aad] justify-center text-white text-[17px] font-bold font-["Montserrat"] leading-[69.32px] tracking-[3.90px] rounded-[5.91px]'>
								GET DIRECTIONs
							</button>
						</div>
					</div>
				</div>
			</section>
			<div className='bg-[#F8FBFF]'>
				<AnythingElse></AnythingElse>
			</div>
		</div>
	);
}

export default Contact;
