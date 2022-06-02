export interface IData {
  user: IUserDetail;
  account: IAccountInfoDetail;
  transactions: TTransactionsList;
}

export type TTransactionsList = ITransactionDetail[];

export interface IAccountInfoDetail {
  nr: string;
  salary: number;
  balance: number;
}

export interface ITransactionDetail {
  recipient: string;
  lineitem: string;
  timestamp: string;
  amount: number;
}

export interface IUserDetail {
  name: string;
  img: string;
}
