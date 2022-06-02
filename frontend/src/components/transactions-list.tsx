import { useState } from "react";

import { TTransactionsList } from "../lib/interfaces";

export function TransactionsList(props: { list: TTransactionsList }) {
  const [list, updateList] = useState(props.list);

  return (
    <div>
      <h4>Recent transactions</h4>
      {list.map((transaction) => (
        <>
          <ul>
            <li key={transaction.id}>{transaction.recipient}</li>
            <li key={transaction.id}>{transaction.lineitem}</li>
            <li key={transaction.id}>{transaction.timestamp}</li>
            <li key={transaction.id}>{transaction.amount}</li>
          </ul>
        </>
      ))}
    </div>
  );
}
