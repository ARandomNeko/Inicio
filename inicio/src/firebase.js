// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: 'AIzaSyBt4Y220emJ7SFfra7_N_HTnSVA4ozYz9w',

	authDomain: 'worldpeacetoday-1a3d3.firebaseapp.com',

	projectId: 'worldpeacetoday-1a3d3',

	storageBucket: 'worldpeacetoday-1a3d3.appspot.com',

	messagingSenderId: '925024448534',

	appId: '1:925024448534:web:199caf81884c0973030537',

	measurementId: 'G-ZE6MRMKDST'
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
