import React, { useState } from 'react';
import { Layout } from '../../components/layout';
import styled from '@emotion/styled';
import { createDex } from '../../service/dexService';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const BodyDiv = styled('div')`
    margin-top: 15px;
    text-align: center;
`;

const NewDexPage: NextPage = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const router = useRouter();

    const onClickHandler = async (): Promise<boolean> => {
        setIsLoading(true);
        const createdDex = await createDex({
            userId:'1234'
        });
        return router.push(`/dex/${createdDex.dexId}`);
    };

    return (
        <Layout>
            <BodyDiv>
                <h1>Create a New Dex!</h1>
                <button onClick={async (): Promise<void> => { await onClickHandler(); }} disabled={ isLoading }>
                    { isLoading ? '' : 'Let\'s Go!' }
                </button>
            </BodyDiv>
        </Layout>
    );
};

export default NewDexPage;
