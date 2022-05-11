using Microsoft.AspNetCore.Mvc;

namespace WebApplicationLayer.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
