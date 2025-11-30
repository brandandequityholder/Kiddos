import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function RouteWatcher() {
	const location = useLocation();

	useEffect(() => {
		// Dispatch after route changes
		setTimeout(() => {
			window.dispatchEvent(new Event('forcePlayVideos'));
		}, 400); // delay ensures DOM is updated
	}, [location]);

	return null;
}

export default RouteWatcher;
