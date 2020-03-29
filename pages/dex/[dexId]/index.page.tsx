import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../../../components/layout';
import { NextPage } from 'next';

const Dex: NextPage = () => {
    const router = useRouter();
    const { dexId } = router.query;
    return (
        <Layout>
            { dexId }
        </Layout>
    );
};

export default Dex;