import { useState } from 'react'

import './App.css'
import './fonts/stylesheet.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Footer from './components/Footer';

import { FadeEffect } from './utils/FadeEffect';
import Nav from './components/Nav';
import Announcement from './components/Announcement';
import Schedule from './pages/Schedule/Schedule';
import Team from './pages/Team/Team';
import ForceVideos from './utils/ForceVideos';
import RouteWatcher from './utils/RouteWatcher';
import Policies from './pages/policies/policies';
import FAQ from './pages/FAQ/faq';
import Contact from './pages/Contact/contact';
import Values from './pages/Values/values';
import Pricing from './pages/pricing/pricing';
import Careers from './pages/Careers/Careers';
import ScrollToTop from './components/scroll';
function App() {
	return (
		<div className='overflow-hidden p-0 m-0'>
			<BrowserRouter>
				<ScrollToTop></ScrollToTop>
				{/* <div className="py-[56px] bg-[#F6C94B] flex space-x-[83px] justify-center border-black ">
        {nav.map((el) => (
          <Link
            key={el}
            className="cursor-pointer uppercase font-[600]"
            to={el.link}
          >
            {el.name}
          </Link>
        ))}
      </div> */}
				{/* <ForceVideos></ForceVideos>
				<RouteWatcher></RouteWatcher> */}
				<FadeEffect></FadeEffect>
				<Announcement></Announcement>
				<Nav></Nav>
				<Routes>
					<Route
						path=''
						element={<Home></Home>}></Route>
					<Route
						path='/Schedule'
						element={<Schedule></Schedule>}></Route>
					<Route
						path='/team'
						element={<Team></Team>}></Route>
					<Route
						path='/policies'
						element={<Policies></Policies>}></Route>
					<Route
						path='faq'
						element={<FAQ></FAQ>}></Route>
					<Route
						path='contact'
						element={<Contact></Contact>}></Route>
					<Route
						path='values'
						element={<Values></Values>}></Route>
					<Route
						path='pricing'
						element={<Pricing></Pricing>}></Route>
					<Route
						path='careers'
						element={<Careers></Careers>}></Route>
				</Routes>

				<Footer></Footer>
			</BrowserRouter>
		</div>
	);
}

export default App
