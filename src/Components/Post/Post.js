export default (post) => {
	return `
		<div class="post-item">
			<h1>${post.title}</h1>
			<p>${post.body}</p>
		</div>
	`
}
