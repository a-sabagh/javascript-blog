import style from './New.css'
import Navigation from '../Navigation/Navigation.js'
import Footer from '../Footer/Footer.js'

export default (action) => {
	let output = Navigation(action)
	output += `
		<div class="container-fluid">
			<form action="" method="post" onsubmit="app.newPost(event)">
				<div class="form-control">
					<input type="text" name="title">
				</div>
				<div class="form-control">
					<textarea id="" name="body" cols="30" rows="10"></textarea>
				</div>
				<div class="form-control"><input type="submit" value="Add Post"></div>
			</form>
		</div>
	`
	output += Footer()
	return output
}
