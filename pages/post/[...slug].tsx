import * as React from 'react';
import { NextPage } from 'next';
import { AppInitialProps } from 'next/dist/next-server/lib/utils';
import Layout from '@containers/Layout';
import Header from '@components/Header';

import Http from '../../api/Http';

interface IPost extends AppInitialProps {
    id: string;
    title: string;
    picture: string;
    description: string;
    meta?: Array<{ content: string; property: string }>;
}

const SinglePost: NextPage<IPost> = (props) => {
    const { title, picture, description, meta } = props;

    return (
        <Layout>
            <Header meta={meta} />
            <div className="w-full h-48 w-4 inline-block bg-teal-400 overflow-hidden">
                <picture>
                    <img src={picture} alt="" className="w-full" />
                </picture>
            </div>
            <div className="my-1 w-full pt-5">
                <h1 className="font-bold uppercase">{title}</h1>
                <div className="text-container pt-10">{description}</div>
            </div>
        </Layout>
    );
};

SinglePost.getInitialProps = async (context) => {
    const { query } = context;
    const { slug } = query;

    const { data } = await Http.get(`trips/${slug[0]}`);

    return { ...data };
};

export default SinglePost;
