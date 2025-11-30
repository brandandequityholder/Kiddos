import { useState } from 'react';

const MenuBurger = ({ collapsed, id = 1 }) => {
	const [isActive, setIsActive] = useState(false);

	const toggleMenu = () => setIsActive(!isActive);

	return (
		<header
			id={id}
			className='flex items-center justify-end h-full w-full p-0 m-0 space-x-[10px]'>
			{!collapsed && (
				<div
					className="text-white font-bold text-[12px] tracking-widest font-['League_Spartan']"
					style={{ color: collapsed ? '#F6C94B' : '#fff' }}>
					MENU
				</div>
			)}

			<div
				className='h-[18px] flex flex-col justify-between items-center cursor-pointer z-50'
				onClick={toggleMenu}>
				{[0, 1, 2].map((i) => (
					<span
						key={i}
						className='block w-5 h-[2px] bg-white rounded-sm transition-all duration-300 ease-in-out'
						style={{
							// 1. Handle Movement & Rotation
							transform: collapsed
								? i === 0
									? 'translateY(8px) rotate(45deg)'
									: i === 1
									? 'translateX(0)' // Middle bar stays put spatially
									: 'translateY(-8px) rotate(-45deg)'
								: 'translateY(0) rotate(0deg)',

							// 2. Handle Fading (Separate Property)
							opacity: collapsed && i === 1 ? 0 : 1,

							transformOrigin: 'center',
						}}></span>
				))}
			</div>
		</header>
	);
};

export default MenuBurger;
