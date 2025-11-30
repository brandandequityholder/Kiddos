import { useEffect } from 'react';

function ForceVideos() {
	const playAllVideos = () => {
		const videos = document.querySelectorAll('video');
		videos.forEach((video) => {
			video.muted = true;
			video.playsInline = true;
			video.setAttribute('playsinline', '');
			video.setAttribute('webkit-playsinline', '');
			video.setAttribute('muted', '');
			video.setAttribute('autoplay', '');

			const tryPlay = () => {
				video.play().catch((err) => {
					console.warn('Autoplay blocked, retrying...', err);
					setTimeout(() => {
						video.play().catch(() => {});
					}, 100);
				});
			};

			video.addEventListener('ended', () => {
				video.currentTime = 0;
				tryPlay();
			});

			tryPlay();
		});
	};

	useEffect(() => {
		// Initial run
		const t = setTimeout(playAllVideos, 300);

		// Re-run on custom event
		window.addEventListener('forcePlayVideos', playAllVideos);

		return () => {
			clearTimeout(t);
			window.removeEventListener('forcePlayVideos', playAllVideos);
		};
	}, []);

	return null;
}

export default ForceVideos;
