import Meta from '../components/Meta'
import styled, { createGlobalStyle } from 'styled-components';
import Layout from '../containers/Layout'
import Menu from '../containers/Menu'
const GlobalStyle:any = createGlobalStyle`
 h1 {
   font-size: 1rem;
   color: red;
  
 }
`;

export default function Home()  {

  const meta = [{
    property: 'teste',
    content: 'dddd'
  }];
  return (
    <>
       <Meta meta={meta}></Meta>
       <GlobalStyle/>
       <Menu/>
       <Layout>
      

        <h1>teste</h1>
       </Layout>
    
    </>
  )
}
