import { POKEMON_LIST } from '../resources/pokemonList';
import { Pokemon } from '../model/pokemon';

const GEN2_SIZE = 251;

export const getGen2 = (): Pokemon[] => {
    return POKEMON_LIST.slice(0, GEN2_SIZE);
};
