const isVideoElementSupported = !!document.createElement('video').canPlayType;
const isWakeLockSupported = 'wakeLock' in navigator;
//const isOldIOS = /iP(hone|od|ad)/.test(navigator.platform) && !isWakeLockSupported;

if (isVideoElementSupported) {
	const noSleepVideo = document.createElement('video');
	Object.assign(noSleepVideo, {
		width: 0,
		height: 0,
		currentTime: 0,
		loop: true,
		muted: true,
		playsInline: true
	});

	const noSleepSource = document.createElement('source');
	Object.assign(noSleepSource, {
		src: 'data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAl2F2YzEAAAAAAAAACGZyZWUAACqEBG1kYXQhEAUAAARghHRyYWsAAABcdGtoZAAAAAEAAAAAAAAAAAAAACaWm0AAA1Rtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAAAAAGQAAZGF0YQAAAAEAAAAARW5jb2RlIGJ5IEZGVkJMTUJPSUwgAA==',
		type: 'video/mp4'
	});

	noSleepVideo.appendChild(noSleepSource);
	//document.body.appendChild(noSleepVideo);

	window.setNoSleep = async (noSleepState) => {
		if (noSleepState) {
			try {
				await noSleepVideo.play();
				return true;
			} catch (err) {
				//console.error(`${err.name}, ${err.message}`);
				return false;
			}
		} else {
			noSleepVideo.pause();
			noSleepVideo.currentTime = 0;
			return noSleepVideo.currentTime === 0;
		}
		return false;
	};
}

if (isWakeLockSupported) {
	let requestWakeLock = null;
	window.setWakeLock = async (wakeLockState) => {
		if (wakeLockState) {
			try {
				requestWakeLock = await navigator.wakeLock.request('screen');
				return true;
			} catch (err) {
				//console.error(`${err.name}, ${err.message}`);
				return false;
			}
		} else {
			if (requestWakeLock) {
				try {
					await requestWakeLock.release();
					requestWakeLock = null;
					return true;
				} catch (err) {
					//console.error(`${err.name}, ${err.message}`);
					return false;
				}
			}
		}
		return false;
	};
}

const handleLockState = (requestState) => {
	if (isWakeLockSupported) setWakeLock(requestState);
	if (isVideoElementSupported) setNoSleep(requestState);
};

document.addEventListener('visibilitychange', () => {
	handleLockState(document.visibilityState === 'visible');
});

window.addEventListener('load', () => {
	handleLockState(true);
});

window.addEventListener('beforeunload', () => {
	handleLockState(false);
});