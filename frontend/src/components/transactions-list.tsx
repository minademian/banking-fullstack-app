import React, { useState } from "react";
import {
  IData,
  ITransactionDetail,
  TTransactionsList,
} from "../lib/interfaces";

export function TransactionsList(props: { list: TTransactionsList }) {
  const [list, updateList] = useState(props.list);

  return (
    <div>
      <h4>Recent transactions</h4>
      <ul>
        {list.map((transaction) => 
            <li key={transaction.id}>{transaction.recipient}</li>
            <li key={transaction.id}>{transaction.lineitem}</li>
            <li key={transaction.id}>{transaction.timestamp}</li>
            <li key={transaction.id}>{transaction.amount}</li>
        )}
      </ul>
    </div>
  );
}
