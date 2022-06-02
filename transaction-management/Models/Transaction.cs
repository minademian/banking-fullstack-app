using System;
namespace transaction_management.Models
{
	public class Transaction
	{
		public Transaction(string transaction_id, string account_id, int amount, DateTime created_at)
		{
			TransactionId = transaction_id;
			AccountId = account_id;
			Amount = amount;
			CreatedAt = created_at;
		}
		public string TransactionId { get; set; }
		public string AccountId { get; set; }
		public int Amount { get; set; }
		public DateTime CreatedAt { get; set; }
		public static IEnumerable<Transaction> GetTransactions()
		{
				List<Transaction> transactions = new List<Transaction>()
				{
					new Transaction("0001","1111",234,new DateTime(2020,02,01)),
					new Transaction("0002","1111",234,new DateTime(2020,02,01)),
					new Transaction("0003","1111",234,new DateTime(2020,02,01))
				};
				return transactions;
		}
	}
}