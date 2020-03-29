import { Pokemon } from './pokemon';

export interface Dex {
    dexId: string;
    userId: string;
    pokemon: Pokemon[];
}
