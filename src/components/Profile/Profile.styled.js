import styled from 'styled-components';

export const Card = styled.div`
    width: 500px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 0px 0px 4px 4px;
    background-color: #ffffff;
`;

export const Description = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 40px;
`

export const Avatar = styled.img`
    width: 200px;
    border-radius: 50%;
    margin-bottom: 20px;
`

export const UserName = styled.p`
    font-weight: 600;
    font-size: 45px;
    line-height: calc(45 / 38);
    text-align: center;
`
export const Tag = styled.p`
    font-weight: 500;
    font-size: 25px;
    line-height: calc(25 / 20);
    text-align: center;
    color: grey;

`
export const Location = styled.p`
    font-weight: 500;
    font-size: 30px;
    line-height: calc(30 / 25);
    text-align: center;
    color: grey;
`

export const Stats = styled.ul`
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    height: 100%;

    flex-basis: calc(100% / 3);

    background-color: rgba(230, 230, 230, 0.651);
    border-right: 1px solid rgba(150, 150, 150, 0.3);
    border-top: 1px solid rgba(150, 150, 150, 0.3);
    backdrop-filter: blur(10px);

    :last-child {
        border-right: 0;
    }
`

export const StatsItemLabel = styled.span`
    font-weight: 500;
    font-size: 27px;
    line-height: calc(27 / 23);
    text-align: center;
    color: grey;
`

export const StatsItemQuantity = styled.span`
    font-weight: 600;
    font-size: 35px;
    line-height: calc(35 / 30);
    text-align: center;
`

