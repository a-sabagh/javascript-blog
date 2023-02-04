import Router from './Router'

export default class {

	#state
	#router
	#stateEvent
	
	constructor(){
		this.#router = new Router({
			"^\/post\/(\\d+)$" : {
				title: "Personal Blog | Single",
				action: "post",
			},
			"^\/(home)?$" : {
				title: "Personal Blog | Home",
				action: "home",
			},
			
		},this)
		this.#state = new Object
		this.#stateEvent = new Event('onstatechange')
	}

	setState(callback){
		let oldState = this.#state
		this.#state = callback(oldState) 
		document.dispatchEvent(this.#stateEvent)
	}

	getState(key){
		return this.#state[key]
	}

	home(matches){
		alert('home')
		console.log(matches)
	}

	post(matches){
		alert(`post with id ${matches[1]}`)
		console.log(matches)
	}

	404(matches){
		alert('404')
		console.log('404 Not Found')
	}

	route(){
		let action = this.getState('action')
		this.#router.init(action)
	}

}
