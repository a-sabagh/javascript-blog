export default class {

	constructor(mapApi, app){
		this.mapApi = mapApi
		this.app = app
	}

	init(path){
		for(let regString in this.mapApi){
			let regex = new RegExp(regString)
			let matches = path.match(regex)
			if(matches){
				let action = this.mapApi[regString].action
				return this.app[action](matches)
			}
		}
		return this.app[404]()
	}

}
