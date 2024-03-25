import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const CreateNewForm = styled('form')`
    height: 400px;
    display: grid;
    gap: 8px;
    grid-template-rows: 80px 220px 40px 40px ;

    &> label{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    &> label>.title_field,
    &> label>.text_field {
        padding: 8px 16px;
        border: 2px solid #999;
        border-radius: 6px;
        outline: none;
    }
    &> label>.title_field:focus,
    &> label>.text_field:focus {
        border: 2px solid var(--blue);
    }
    &> .topic-submit  {
        border-radius: 6px;
        border: 2px solid #999;
    }
    &> .autherror  {
        margin-top: auto;
    }


`;