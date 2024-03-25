import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { css } from '@emotion/react';


export const CardWrap = styled('div')`
 
    position: relative;
    color: #222;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start; 
    width: 100%;

    &>.card_title{
        position: relative;
        color: #e4e4e7;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 12px 80px 12px 8px;
        width: 100%;
        height: 50px;
        border-radius: 6px;
        overflow: hidden;

    @media screen and (min-width: 768px) {
         padding: 12px 80px 12px 20px
    }
    }
    &>.card_content{
        padding: 12px 8px ;
        width: 100%;
        border-radius: 6px;
        border: 2px solid #ee0;
        background-color: beige;
        max-height: 110px;
        overflow: hidden;

    @media screen and (min-width: 768px) {
        padding: 12px 20px ;
    }
    }

`;

export const BtnWrap = styled('div')`
    position: absolute;
    right: 12px;
    display: flex;
    gap: 8px;
    &>button{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        transition: 0.5s ease;

      &:hover{
        border: 1px solid #d9d9d9;
      }  
      &>svg {
        fill: #d9d9d9 ;
      }  
    }
`

