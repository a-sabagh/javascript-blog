import style from './Home.css'
import Post from '../Post/Post.js'
import Navigation from '../Navigation/Navigation.js'
import Footer from '../Footer/Footer.js'

export default (posts,action) => {
	let output = Navigation(action)
	posts.forEach((post,index) => {
	output += `
		<div class="container">
			<div class="post-item">
				<h1>
					<a href="/post/${post.id}" title="${post.title}" onclick="navigate(event)">${post.title}</a>
				</h1>
				<p>${post.body}</p>
			</div>
		</div>
	`
	})
	output += Footer()
	return output
}
