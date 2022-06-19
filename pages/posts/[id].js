import React from 'react'


const MypostControll = (props) => {

  return( <>
  
   <h1>Testing my post  </h1>
  
  </>)
}


// remember this function get papi!!
export async function getStaticProps({params}){
   const post = await fetch('https://jsonplaceholder.typicode.com/posts/1'+params.id)
   const caught = await post.json()
   return {
        props:{
           name:'Programmer Floripa 18',
           id: params.id,
           post: caught  
        },
        revalidate:60
    }
}


export async function getStaticPaths(){


    return {
        props:{
            
        }
    }
}




export default MypostControll