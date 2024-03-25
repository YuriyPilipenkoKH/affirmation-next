import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { css } from '@emotion/react';


export const ErrorWrap = styled('div')`
    background-color: var(--red);
    color: #eee;
    font-size: 14px ;
    line-height: 20px ;
    padding: 4px 12px;
    border-radius:  6px ;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 28px;
    width: 100%;

    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap; 
`;

