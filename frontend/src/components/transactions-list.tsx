import React, { useState } from "react";
import {
  IData,
  ITransactionDetail,
  TTransactionsList,
} from "../lib/interfaces";

export function TransactionsList(props: { list: TTransactionsList }) {
  const [list, updateList] = useState(props.list);

  return <p>transactions list</p>;
}
