import React from 'react'

//practice side server rendering!!!
// and page static
//remember page static i dont getting adding api, because end up staying slowed
const SSR = (props) => {
   return(<>
   <h1>Practice little bit about side server rendering!</h1>
   {JSON.stringify(props, null,2)}
   </>)
}


//adding api to adding new date!! with getserversideprops
export async function getServerSideProps(){
 return {
   props:{
      name:'Felipe Floripa Martins',
      age: 27,
      profissions: 'Programer Front-end(React,node, next e redux)'
   }
 }
}


export default SSR