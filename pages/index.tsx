import { NextComponentType } from 'next';

import Header from '../components/Header'
//import styles from '../styles/Home.module.css'
import styled, { createGlobalStyle } from 'styled-components';
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
  }]
  return (
    <div>
       <Header meta={meta}></Header>
      <GlobalStyle/>
      <h1>teste</h1>
    </div>
  )
}
