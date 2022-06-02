import { useState } from "react";
import { IAccountInfoDetail, IUserDetail } from "../lib/interfaces";

export function AccountProfileInfo(props: {
  userInfo: IUserDetail;
  account: IAccountInfoDetail;
}) {
  const [user, updateUser] = useState(props.userInfo);
  const [account, updateAccount] = useState(props.account);

  const anonymizeAccountNumber = (accountNr: string) => {
    return Array.from(accountNr).splice(-4, 4);
  };

  return (
    <header>
      <img src={process.env.PUBLIC_URL + user.img}></img>
      <caption>
        <h4>{user.name}</h4>
        <h6>Account ending with {anonymizeAccountNumber(account.nr)}</h6>
      </caption>
    </header>
  );
}
