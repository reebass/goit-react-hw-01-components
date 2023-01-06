import styled from 'styled-components';

export const Container = styled.section`
    min-width: 500px;

    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 0px 0px 4px 4px;
    background-color: #ffffff;
`

export const Title = styled.h2`
    margin: 50px auto;

    font-weight: 600;
    font-size: 35px;
    line-height: calc(35 / 30);
    text-align: center;
    text-transform: uppercase;

    color: grey;
`

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;

    width: 100%;
`

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    padding: 20px;
    flex-basis: calc(100% / 4);

    background-color: ${props=> {
        return props.RandomColor
    }};
`

export const Label = styled.span`
    font-size: 25px;
    line-height: calc(25 / 20);
    text-align: center;
    color: #FFFFFF;
`


export const Percentage = styled.span`
    font-weight: 600;
    font-size: 40px;
    line-height: calc(40 / 35);
    text-align: center;
    color: #FFFFFF;
`


