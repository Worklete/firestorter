import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {
	initFirestorter,
	getFirestore,
	getFirebase,
	getFirebaseApp,
	Collection,
	Document,
	isTimestamp,
	mergeUpdateData,
	Mode
} from '../src';
import { autorun, reaction, observable, configure } from 'mobx';
import firebaseConfig from './firebaseConfig.json';

let firebaseApp;

beforeAll(() => {
	jest.setTimeout(10000);

	// Initialize firebase
	firebaseApp = firebase.initializeApp(firebaseConfig);
	const firestore = firebase.firestore();

	// Configure mobx strict-mode
	configure({ enforceActions: 'always', computedRequiresReaction: true });

	// Initialize firestorter
	initFirestorter({ firebase: firebase, app: firebaseApp });

	// Verify that firestorter is initialized correctly
	if (!getFirebase()) throw new Error('getFirebase');
	if (!getFirebaseApp()) throw new Error('getFirebaseApp');
	if (!getFirestore()) throw new Error('getFirestore');
});

afterAll(() => {
	firebaseApp.delete();
});

export {
	firebase,
	initFirestorter,
	getFirestore,
	getFirebase,
	Collection,
	Document,
	isTimestamp,
	mergeUpdateData,
	autorun,
	reaction,
	observable,
	Mode
};
