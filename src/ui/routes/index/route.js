import Route from '@ember/routing/route';

const api = "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json";

export default class IndexRoute extends Route {
	async model() {
		return await (await fetch(api)).json();
	}
}
