import styled from "styled-components";

export const Wrapper = styled.div`
  display:flex;
  width: 100%;
  justfy-content: space-between;
  padding: 4px;
  
  input{
    border: 1px solid #f1f6f7;
    border-radius: 8px;
    width:100%;
    height: 44px;
    padding: 8px;
    font-weight: 400;
  }

  button{
    background: #f1f6f7;
    padding: 8 8px;
    margin: 0 4px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 15px;
    


    &:hover{
     background: rgb(164,163,181);
     background: linear-gradient(180deg, rgba(164,163,181,1) 0%, rgba(231,231,240,1) 29%, rgba(255,255,255,1) 100%);
    }

    span {
       font-weight:600;
       color: #13134d; 
       justfy-content: space-arround;
    }
  }

`;