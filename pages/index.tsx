import { createGlobalStyle } from 'styled-components';
import Layout from '@containers/Layout';
import MainContainer from '@containers/MainContainer';
import PostCard from '@components/PostCard';

import Http from '../api/Http';
import { NextPage } from 'next';

const GlobalStyle: any = createGlobalStyle`
 h1 {
   font-size: 1rem;
   color: red;
  
 }
`;

interface IPostCard {
    id: string;
    title: string;
    picture: string;
    description: string;
    meta?: Array<{ content: string; property: string }>;
}

interface IHome {
    trips: Array<IPostCard>;
}

const Home: NextPage<IHome> = (props) => {
    const { trips } = props;

    return (
        <>
            <GlobalStyle />
            <Layout />
            <MainContainer>
                {trips &&
                    trips.map((trip) => <PostCard {...trip} key={trip.id} />)}
            </MainContainer>
        </>
    );
};

Home.getInitialProps = async () => {
    const { data } = await Http.get('trips');

    return { trips: data };
};

export default Home;
