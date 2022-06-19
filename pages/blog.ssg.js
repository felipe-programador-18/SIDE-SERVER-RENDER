import React from 'react'

// now is static site genaratoins is very good to make blog and several page in same time!!!


const Blog =  (props) => {
return (<>
   
   <h1>Practice ABOUT STATIC SITE GENERATION</h1>
   {JSON.stringify(props, null, 2)}
</>)
}


export async function getStaticProps(context){
    const getdata =  await fetch('https://jsonplaceholder.typicode.com/posts')
    const manage = getdata.json()
    
    return{
        props:{
              name:'Felipe Floripa Programmer',
              getdata: manage  
        }
    }
}

export default Blog