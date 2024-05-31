import styled from "styled-components";

export const Button = styled.button`
border: 2px solid #D35400;
padding: 10px 16px;
border-radius: 8px;
background-color: ${(props) => props.color === "outline" ? "none" : "#F39C12"};
color: ${(props) => props.color === "outline" ? "#D35400" : "#fff"};   
border: ${(props) => props.color === "outline" ? "#D35400" : "#F39C12"}; 
`