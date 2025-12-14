import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAnnouncement } from '../lib/queries';

function Announcement() {
	const [data, setData] = useState(null);

	useEffect(() => {
		getAnnouncement().then(setData);
	}, []);

	if (!data || !data.enabled) return 		<div className='fixed z-[90] top-0 w-full h-[78px] flex justify-center items-center bg-[#F8EA2B]'/>


	return (
		<div className='fixed z-[90] top-0 w-full h-[78px] flex justify-center items-center bg-[#F8EA2B]'>
			<div className='flex w-full justify-center space-x-[5px] lg:space-x-[10px] items-center'>
				<p className='text-right MadeGentle justify-start text-blue-800 text-[10px] lg:text-lg font-normal leading-[50.33px] tracking-wide'>
					{data.text}
				</p>
				<Link
					target='_blank'
					rel='noopener noreferrer'
					to={data.linkUrl}>
					<p className='text-right underline MadeGentle justify-start text-blue-800 text-[10px] lg:text-lg font-normal leading-[50.33px] tracking-wide'>
						{data.linkText}
					</p>
				</Link>
			</div>
		</div>
	);
}

export default Announcement;
