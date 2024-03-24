"use client"
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { css } from '@emotion/react';


export const MContainer = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0 auto;
    height:  100vh ;

    @media screen and (min-width: 320px) {
    width: 320px;
    }
    @media screen and (min-width: 768px) {
        width: 768px;
    }
    @media screen and (min-width: 1280px) {
        width: 1280px;
    }

    & > div {
        margin: 0 auto;
    }
`;