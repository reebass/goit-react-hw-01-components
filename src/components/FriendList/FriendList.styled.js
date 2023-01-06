import styled from 'styled-components';

export const List = styled.ul`
    width: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const Item = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;

    padding: 20px 15px;

    background-color: #ffffff;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 4px;
`