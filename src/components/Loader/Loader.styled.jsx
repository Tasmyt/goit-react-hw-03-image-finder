import styled from 'styled-components';

export const Loading = styled.div`

   text-align: center;
   
  font-size: 20px;
  color: black;
    animation-name: example;
    animation-duration: 2s;
    animation-iteration-count: 3;

    @keyframes example {
    0%   {color: black;}  
    50%  {color: blue;}
    100% {color: green;}
}
`;