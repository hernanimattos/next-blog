import { createGlobalStyle } from 'styled-components';
import Layout from '@containers/Layout';
import MainContainer from '@containers/MainContainer';
import PostCard from '@components/PostCard';

import HTTP from '../api/Http';
import Http from '../api/Http';
const GlobalStyle: any = createGlobalStyle`
 h1 {
   font-size: 1rem;
   color: red;
  
 }
`;

const Home = ({ trips }) => {
    return (
        <>
            <GlobalStyle />
            <Layout />
            <MainContainer>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </MainContainer>
        </>
    );
};

Home.getInitialProps = async (context) => {
    const { data } = await Http.get('trips');
    return { trips: data };
};

export default Home;
