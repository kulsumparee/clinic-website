import styled from "styled-components";

export const Maincontent = styled.div`
    
`
export const NavContent = styled.div`

width: 100%;
height: 100px;
color: #fff;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 16px;
font-weight: 600;
padding: 0 80px;
background: linear-gradient(180deg, rgba(241, 241, 241, 0.2) 100%, rgba(241, 241, 241, 0.6) 100%);

@media (max-width:1024px) {
  
  height: 15%;
}

@media (max-width:640px) {
  
  height: 10%;
}




`


export const NavLogo = styled.img`
    
`
export const Heading = styled.h2`
    
`

export const ListItems = styled.div`
  display: flex;
  align-items: center;

  .amtd{

     @media (max-width:640px) {
      width: 30px;
     
     }

     @media (max-width:400px) {
      width: 30px;
     
     }
  }
`