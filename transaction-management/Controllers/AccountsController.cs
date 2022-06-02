using Microsoft.AspNetCore.Mvc;
using transaction_management.Models;

namespace transaction_management.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        [Route("{account_id}")]
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Account))]
        public ActionResult GetTransactionbyId([FromRoute]string account_id)
        {
            List<Account> accounts = (List<Account>)Account.GetAccounts();

            var findById = from account in accounts
                           where account.AccountId == account_id
                           select account;

            if (findById.Count() == 0)
                return NotFound();

            return Ok(findById);

        }
    }
}
