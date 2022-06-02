import React, { useState } from "react";

export function AccountBalance(props: { balance: number }) {
  const [balance, updateBalance] = useState(props.balance);

  return <p>account balance is {balance}</p>;
}
