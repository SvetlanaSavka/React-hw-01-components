//import { type } from '@testing-library/user-event/dist/type';
import PropTypes from 'prop-types';
//import { Table, TableData, TableHead } from './TransactionHistory.styled';

import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

/* const Tr = ({ id, type, amount, currency }) => (
  <tbody className={styles.try}>
    <tr className={styles.tr}>
      <td className={styles.title}>{type}</td>
      <td className={styles.title}>{amount}</td>
      <td className={styles.title}>{currency}</td>
    </tr>
  </tbody>
);

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <div className={styles.table}>
        <thead className={styles.link}>
          <tr className={styles.header}>
            <th className={styles.headertitle}>Type</th>
            <th className={styles.headertitle}>Amount</th>
            <th className={styles.headertitle}>Currency</th>
          </tr>
        </thead>

        {items.map(item => {
          return (
            <Tr
              className={styles.title}
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            ></Tr>
          );
        })}
      </div>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
}; */
