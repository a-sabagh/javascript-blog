import Router from './Router'
import Home from './Components/Home/Home.js'
import Post from './Components/Post/Post.js'

export default class {

	#state = {
		action: 'home',
		posts: [
			{ id: 1, title: "Hello World", body: "Lorem velit veritatis beatae inmagni molestiae dolorem laborum officiis sapiente consequuntur! Sequi dolores eligendi?" },
			{ id: 2, title: "PHP Strings", body: "Adipisicing quisquam beatae ea inmagni optio distinctio pariatur. Vero quia quia" },
			{ id: 3, title: "Array Data Structure", body: "Dolor ratione maiores nam quasi impedit odio rerum inmagniaut! Reiciendis quidem modi." },
			{ id: 4, title: "Functions and Prosedure", body: "Consectetur voluptatum amet sint quisquam animi? Accusamus error" },
		]
	}
	#router
	#stateEvent
	#appElement
	
	constructor(appId){
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
		this.#appElement = window.document.getElementById(appId)
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
		let posts = this.getState('posts')
		return Home(posts,this.getState('action'))
	}

	post(matches){
		let id = matches[1]
		let posts = this.getState('posts')
		let post = posts.find((post) => {
			return post.id == id
		})
		return Post(post,this.getState('action'))
	}

	404(matches){
		alert('404')
		console.log('404 Not Found')
	}

	route(){
		let action = this.getState('action')
		this.#appElement.innerHTML = this.#router.init(action)
	}

}
