import style from './style.css'
import App from './App.js'

window.app = new App('app')
window.onload = (event) => {
	let href = window.location.href
	let state = new URL(href).pathname
	app.setState((oldState) => {
		oldState['action'] = state
		return oldState
	})
	app.route()
}

window.navigate = (event) => {
	event.preventDefault()
	let target = event.target
	let state = new URL(target.href).pathname
	window.history.pushState({},'',state)
	app.setState((oldState) => {
		oldState['action'] = state
		return oldState
	})
	app.route()
}
