import styled from 'styled-components';

export const Table = styled.table`
    background-color: rgba(230, 230, 230, 0.2);
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 10px;

    overflow: hidden;
    width: 1000px;

    
`

// export const Div = styled.div`
//     height: 700px;
//     overflow-y: scroll;
// `

export const TitleTable = styled.th`
    background-color: rgb(8, 157, 243);
    padding: 15px 70px;

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 25px;
    text-align: center;

    color: #FFFFFF;
`
export const RowTable = styled.tr`
        :nth-child(2n) {
        background-color: rgba(180, 180, 180, 0.7);
    }

        :nth-child(2n+1) {
        background-color: #FFFFFF;
    }
`


export const ColumnTable = styled.td`
    padding: 10px 50px;
    text-align: center;
    font-size: 24px;
`




