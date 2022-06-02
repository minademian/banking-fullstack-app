import React from "react";
import { IAccountInfoDetail, IData, IUserDetail } from "../lib/interfaces";
import { AccountBalance } from "./account-balance";
import { SalaryWidget } from "./salary-widget";
import { TransfersBalance } from "./transfers-balance";

export function BalanceDashboard(props: {
  userInfo: IUserDetail;
  accountInfo: IAccountInfoDetail;
}) {
  return (
    <section>
      <section>
        <SalaryWidget />
      </section>
      <section>
        <AccountBalance />
      </section>
      <section>
        <TransfersBalance />
      </section>
    </section>
  );
}
