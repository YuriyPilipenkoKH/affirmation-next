"use client"
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const NavWrap = styled('nav')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 22px 20px;
    gap: 8px;
    height: 70px;
    width:  100% ;

`;


export const HamburgerInner = styled("div", {
    shouldForwardProp: prop => 
    isPropValid(prop) && prop !== 'isOpen',
  })<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
    ${({ isOpen }) =>
      isOpen
        ? css`
            transform: translate(-50%, -50%) rotate(225deg);
            transition-delay: 0.12s;
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          `
        : css`
            transition-duration: 0.22s;
            transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          `}
          `