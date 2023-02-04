import Post from '../Post/Post.js'

export default (posts) => {
	let output = new String
	posts.forEach((post,index) => {
	output += `
		<div class="post-item">
			<h1>
				<a href="/post/${post.id}" title="${post.title}" >${post.title}</a>
			</h1>
			<p>${post.body}</p>
		</div>
	`
	})
	return output
}
