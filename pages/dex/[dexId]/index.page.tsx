import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../../components/layout';
import { NextPage } from 'next';
import { DexDisplay } from '../../../components/dexDisplay';

const DexPage: NextPage = () => {
    const router = useRouter();
    router.query.parse;
    const { dexId } = router.query;

    // TODO: Fix dumb hack
    let dexIdToRetrieve: string;
    if (Array.isArray(dexId)) {
        dexIdToRetrieve = dexId[0];
    } else {
        dexIdToRetrieve = dexId;
    }

    return (
        <Layout>
            <h1>{ dexId }</h1>
            <DexDisplay dexId={dexIdToRetrieve} />
        </Layout>
    );
};

export default DexPage;