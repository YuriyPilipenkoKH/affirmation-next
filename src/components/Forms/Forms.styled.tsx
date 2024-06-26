import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';


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
export const StyledSearchingForm = styled('form')`
    position: relative;
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
    }

    & > label  {
        display: flex;
        gap: 5px;

      & > input{
            outline: none;
            width: 360px;
            background: none;
            color: #eee;
            padding: 6px 70px 6px 16px;
            border: 2px solid #999;
            border-radius: 6px;
      }  
    }
    & > .search_btn_wrap{
        position: absolute;
        right: 14px;
        top: 8px;
        display: flex;
        gap: 10px;

        &> button{
            outline: none;
        }  
      &> button > svg {
        fill: #f8fafc;
      }  
    }

   & > .shut{
        position: absolute;
        right: -4px;
        top: 1px;
        width: 12px;
        height: 12px;
        background-color: #f05f05;
        border-radius: 50%;
        border: 2px solid #999;
   }
`
