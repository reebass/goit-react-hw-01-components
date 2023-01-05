import styled from 'styled-components';


export const Status = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;

    background-color: ${
        props => {
            return props.isOnline ? "rgb(230, 53, 53)" : "rgb(52, 216, 52)"
        }
    };
`

export const Avatar = styled.img`
    width: 70px;
    border-radius: 4px;
`

export const Name = styled.p`
    font-weight: 600;
    font-size: 35px;
    line-height: calc(35 / 30);
`