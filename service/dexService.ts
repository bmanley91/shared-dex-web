import { Dex } from '../model/dex';
import { getGen2 } from '../util/genMapper';

export interface NewDexOptions {
    userId: string;
}

// TODO: Send Request to the backend to create a new dex
export const createDex = async (options: NewDexOptions): Promise<Dex> => {
    console.log(`Creating dex with options:
        ${JSON.stringify(options)}
    `);

    // TODO: un-hard code gen 2
    return Promise.resolve({
        dexId: 'dexId',
        userId: options.userId,
        pokemon: getGen2()
    });
};
