import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr className={css.thead_tr}>
          <th className={css.thead_th}>Type</th>
          <th className={css.thead_th}>Amount</th>
          <th className={css.thead_th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items &&
          items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.tbody_tr}>
              <td className={css.tbody_td}>{type}</td>
              <td className={css.tbody_td}>{amount}</td>
              <td className={css.tbody_td}>{currency}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
