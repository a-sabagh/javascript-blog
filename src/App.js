import Router from './Router'

export default class {

	#state = {
		action: 'home',
		posts: [
			{ id: 0, title: "Hello World", body: "Lorem velit veritatis beatae in? Praesentium repellat magni molestiae dolorem laborum officiis sapiente consequuntur! Sequi dolores eligendi?" },
			{ id: 1, title: "PHP Strings", body: "Adipisicing quisquam beatae ea optio distinctio pariatur. Vero quia quia" },
			{ id: 0, title: "Array Data Structure", body: "Dolor ratione maiores nam quasi impedit odio rerum aut! Reiciendis quidem modi." },
			{ id: 0, title: "Functions and Prosedure", body: "Consectetur voluptatum amet sint quisquam animi? Accusamus error" },
		]
	}
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
