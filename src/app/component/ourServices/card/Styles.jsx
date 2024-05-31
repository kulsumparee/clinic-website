import styled from "styled-components"


export const Card = styled.div`
       display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 30px;
  
    @media (max-width: 1024px) {
     display: grid;
     grid-template-columns: repeat(2, 1fr);
      
       
   }
    @media (max-width: 768px) {
      
      grid-template-columns: repeat(1, 1fr); 
       
   }

  

    `
export const Carddiv = styled.div`

      width: 100%;
   height: 400px;
   button{
    border: 2px solid #D35400;
    padding: 10px 16px;
    color: #D35400;
    border-radius: 8px;
    margin-top: 15px;
   }
 `

