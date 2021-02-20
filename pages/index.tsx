import { createGlobalStyle } from 'styled-components';
import Layout from '@containers/Layout';
import MainContainer from '@containers/MainContainer';
import PostCard from '@components/PostCard';
const GlobalStyle: any = createGlobalStyle`
 h1 {
   font-size: 1rem;
   color: red;
  
 }
`;

export default function Home() {
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
}
