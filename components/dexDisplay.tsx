import React, { useState, useEffect } from 'react';
import { Dex } from '../model/dex';
import { getDex } from '../service/dexService';
import { Pokemon } from '../model/pokemon';


export interface DexProps {
    dexId: string;
}

export const DexDisplay: React.FunctionComponent<DexProps> = (props: DexProps) => {
    const initialDex: Dex = {
        userId: '',
        dexId: '',
        pokemon: []
    };
    const [ dex, setDex ] = useState(initialDex);

    useEffect(() => {
        async function getDexFromBackend() {
            const retrievedDex = await getDex({
                dexId: props.dexId
            });
            setDex(retrievedDex);
        }
        getDexFromBackend();
    }, []);

    return (
        <ul>
            {
                dex.pokemon.map(pokemon => {
                    return <li key={ pokemon.id }>{ pokemon.name }</li>;
                })
            }
        </ul>
    );
};
