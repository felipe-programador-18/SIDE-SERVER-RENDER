import React from 'react'


const NewFile = (props) => {
    return (<>
    <div> Adding new other page!! </div>
    {JSON.stringify(props, null, 2)}
    </>)
}

export async function getServerSideProps(){
   return {
    props:{
     name:'Programer Floripa 2024',
     email:'programmerfelipe2023@outlook.com',
     age: 29
    }
   }
}

export default NewFile