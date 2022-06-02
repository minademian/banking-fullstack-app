using Microsoft.AspNetCore.Mvc;
using transaction_management.Models;

namespace transaction_management.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        [Route("{transaction_id}")]
        [HttpGet]
        public ActionResult GetTransactionbyId([FromRoute]string transaction_id)
        {
            List<Transaction> transactions = (List<Transaction>)Transaction.GetTransactions();

            var findById = from transaction in transactions
                           where transaction.TransactionId == transaction_id
                           select transaction;

            if (findById.Count() == 0)
                return NotFound();

            return Ok(findById);

        }

        [HttpGet]
        public ActionResult GetTransactions()
        {
            return Ok(Transaction.GetTransactions());
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(Transaction))]
        public ActionResult PostTransactionby([FromBody] TransactionRequest request)
        {
            Guid transactionId = Guid.NewGuid();
            DateTime createdAt = DateTime.Now;

            Transaction newTransaction = new Transaction(transactionId.ToString(), request.AccountId, request.Amount, createdAt);

            return Ok(newTransaction);

        }
    }
}
