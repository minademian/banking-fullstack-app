import React, { useState } from "react";
import { ITransactionDetail } from "../lib/interfaces";

export function TransfersBalance(props: { balance: number }) {
  const [balance, updateBalance] = useState(props.balance);

  return <p>transfers balance is {balance}</p>;
}
