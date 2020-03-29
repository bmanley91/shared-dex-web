import { Dex } from '../model/dex';
import { getGen2 } from '../util/genMapper';

export interface NewDexOptions {
    userId: string;
}

// TODO: Send Request to the backend to create a new dex
export const createDex = async (options: NewDexOptions): Promise<Dex> => {
    // TODO: un-hard code gen 2
    return Promise.resolve({
        dexId: 'dexId',
        userId: options.userId,
        pokemon: getGen2()
    });
};

export interface GetDexOptions {
    dexId: string;
}

// TODO: Send Request to the backend to get dex
export const getDex = async (options: GetDexOptions): Promise<Dex> => {
    // TODO: un-hard code gen 2
    return Promise.resolve({
        dexId: options.dexId,
        userId: 'userId',
        pokemon: getGen2()
    });
};
