namespace transaction_management.Models
{
	public class TransactionRequest
	{
		public TransactionRequest(string account_id, int amount)
		{
			AccountId = account_id;
			Amount = amount;
		}
		public string AccountId { get; set; }
		public int Amount { get; set; }
	}
}

