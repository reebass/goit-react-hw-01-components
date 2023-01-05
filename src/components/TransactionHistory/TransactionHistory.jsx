import PropTypes from 'prop-types';
import { Table, TitleTable, ColumnTable, RowTable} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    // <Div>
    <Table className="transaction-history">
      <thead>
        <tr>
          <TitleTable>Type</TitleTable>
          <TitleTable>Amount</TitleTable>
          <TitleTable>Currency</TitleTable>
        </tr>
      </thead>

      <tbody>
        {items.map(({id, type, amount, currency}) => (
            <RowTable key={id}>
                    <ColumnTable>{type}</ColumnTable>
                    <ColumnTable>{amount}</ColumnTable>
                    <ColumnTable>{currency}</ColumnTable>
                  </RowTable>
        ))}

      </tbody>
    </Table>
    // </Div>
  );
};


Event.PropTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }))
}
