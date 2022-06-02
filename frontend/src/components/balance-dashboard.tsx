import {
  IAccountInfoDetail,
  IUserDetail,
  TTransactionsList,
} from "../lib/interfaces";
import { AccountBalance } from "./account-balance";
import { SalaryWidget } from "./salary-widget";
import { TransfersBalance } from "./transfers-balance";

export function BalanceDashboard(props: {
  userInfo: IUserDetail;
  accountInfo: IAccountInfoDetail;
  transactions: TTransactionsList;
}) {
  return (
    <section>
      <section>
        <SalaryWidget salary={props.accountInfo.salary} />
      </section>
      <section>
        <AccountBalance balance={props.accountInfo.balance} />
      </section>
      <section>
        <TransfersBalance
          balance={props.transactions
            .map((transaction) => transaction.amount)
            .reduce((previous, current) => previous + current, 0)}
        />
      </section>
    </section>
  );
}
