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
	console.log(app.getState('action'))
	app.route()
}


