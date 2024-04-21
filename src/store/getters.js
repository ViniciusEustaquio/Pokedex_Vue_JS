import { parsePokemonInfo } from '../utis/index';
import state from './state';

export default {
	get pokemonsInfo() {
		return state.list.map(parsePokemonInfo);
	},
};
