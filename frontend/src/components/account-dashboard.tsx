import React, { useState } from "react";
import { BalanceDashboard } from "./balance-dashboard";
import { TransactionsList } from "./transactions-list";
import { IData } from "../lib/interfaces";
import { AccountProfileInfo } from "./account-profile-info";

const CURRENCY = {
  code: "USD",
  symbol: "$",
};

export function AccountDashboard(props: { data: IData }) {
  const [data, updateData] = useState(props.data);

  return (
    <main>
      <p>Account Dashboard</p>
      <AccountProfileInfo />
      <section>
        <BalanceDashboard
          userInfo={data.user}
          accountInfo={data.account}
          transactions={data.transactions}
        />
      </section>
      <section>
        <TransactionsList list={data.transactions} />
      </section>
    </main>
  );
}
