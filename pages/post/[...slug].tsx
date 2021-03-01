import * as React from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Layout from '@containers/Layout';
import Http from '../../api/Http';

interface IPost {
    id: string;
    title: string;
    picture: string;
    description: string;
    meta?: Array<{ content: string; property: string }>;
}

const SinglePost: NextPage<IPost> = (props) => {
    const router = useRouter();

    const { query } = router;
    const { slug } = query;

    return (
        <Layout>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                contato
            </div>
        </Layout>
    );
};

SinglePost.getInitialProps = async (props) => {
    console.log(props, 'ooooo');
    const { data } = await Http.get(`trips`);

    return data;
};

export default SinglePost;
