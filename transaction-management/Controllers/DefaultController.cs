using Microsoft.AspNetCore.Mvc;

namespace transaction_management.Controllers
{
    [ApiController]
    [Route("/")]
    [Produces("application/json")]
    public class DefaultController : ControllerBase
    {
        [Route("ping")]
        [HttpGet]
        public ActionResult DoHealthCheck()
        {
            return new JsonResult(new { message = "pong"});
        }
    }
}
