import Navigation from '../Navigation/Navigation.js'
import Footer from '../Footer/Footer.js'

export default (post,action) => {
	let output = Navigation(action)
	output += `
		<div class="post-item">
			<h1>${post.title}</h1>
			<p>${post.body}</p>
		</div>
	`
	output += Footer()
	return output
}
