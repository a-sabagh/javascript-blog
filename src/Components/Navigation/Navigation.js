export default (action) => {
	let output = new String
	let items = [
		{
			title: "Home",
			href: "/home",
			class: "",
		},
		{
			title: "New",
			href: "/new",
			class: "",
		}
	]
	output += `
		<nav class="main-nav">
			<ul>
		`
	items.forEach((item,index) => {
		item['class'] = (action == item.href)? 'active' : ''
		output += `
			<li>
				<a href="${item.href}" class="${item.class}" title="${item.title}" onclick="navigate(event)">${item.title}</a>
			</li>
		`
	})
	output += `
			</ul>
		</nav>
		`
	return output
}
