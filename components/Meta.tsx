import * as React from 'react'
import Head from 'next/head';


type Props = {
    meta:Meta[],
}

interface Meta {
    property:string,
    content: string
}


const Meta:React.FC<Props> = ({meta}) =>  {

    return (
        <Head>
            {meta && meta.map((m, i)=>(<meta property={m.property} content={m.content} key={`${i+m.content}`}/>))}
        </Head>
            
    )
}

export default Meta;

