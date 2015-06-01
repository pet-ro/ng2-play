import { FirebaseArray, FIREBASE_TIMESTAMP } from 'services/firebase';

export class Chores extends FirebaseArray {
	constructor() {
		let ref =  new Firebase('https://ng2-play.firebaseio.com/chores');
		super(ref);
	}

	add(task) {
		return super.add({
			desc: task,
			timestamp: FIREBASE_TIMESTAMP,
			completed: false
		});
	}
}


// TODO: remove bellow
export class Tests extends FirebaseArray {
	constructor() {
		let ref =  new Firebase('https://ng2-play.firebaseio.com/chores');
		super(ref);
	}
}