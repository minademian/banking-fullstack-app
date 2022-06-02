using System;
namespace transaction_management.Models
{
    public class Account
    {
        public Account(string account_id, double balance)
        {
            AccountId = account_id;
            Balance = Balance;
        }
        public string AccountId
        {
            get; set;

        }
        public double Balance
        {
            get; set;

        }
        public static IEnumerable<Account> GetAccounts()
        {
            List<Account> accounts = new List<Account>()
                {
                    new Account("149000",234.03),
                    new Account("149001",234.92),
                    new Account("149002",23.29)
                };
            return accounts;
        }
    }
}

