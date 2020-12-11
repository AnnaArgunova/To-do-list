import styled from 'styled-components';
import {tokens} from './tokens';

export const Conteiner = styled.div`
width:1240px;
margin:0 auto;

`

export const Title = styled.h1`
 text-align: center;
`;

export const Grid3 = styled.main`
display: flex;
`;


export const Grid3_1 = styled.div`
width: 30%;

`

export const Grid3_2 = styled.div`
width: 40%;

.center_title{
  text-align:center;
}
`

export const Grid3_3 = styled.div`
width: 30%;

`

export const Form = styled.form`
margin:3%;
input[type="text"],
input[type="date"],
.add_textarea{
 border:1px solid ${tokens.colorBorder};
 border-radius:5%;
  margin:1vw;
}

input[type="text"]{
width:12vw;
 height: 19px;
}

.add_textarea{
  border-radius:2%;
  width:26vw;
}

.add_button{
  text-align:center;
  button{
    width:8vw;
    background-color:transparent;
    border:1px solid ${tokens.colorBorder};
    border-radius:5%
  }
}
`

 export const Input = styled.input`
 
 ::placeholder{
    color: grey;
  }
  
  `;


  export const Important = styled.span`
  color:${props => props.important || "palevioletred"};
  `
  export const Card = styled.li`
  cursor:pointer;
  `