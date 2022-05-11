using BusinessLayer;
using EntityLayer;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace WebApplicationLayer.Controllers
{
    public class ProductTypeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Home()
        {
            return View();
        }

        public IActionResult NoMenu()
        {
            return View();
        }

        /**
         * LLAMAR ACCIONES
         */
        public string ToGreet()
        {
            return "Hola Mundo";
        }

        public double Decimal()
        {
            return 153.52;
        }

        public int Number()
        {
            return 8000;
        }

        public string ToGreetName(string Firstame, string Lastname)
        {
            return "Hola Mundo " + Firstame + " " + Lastname;
        }

        public List<ProductTypeCLS> ListProductType()
        {
            ProductTypeBL productTypeBL = new ProductTypeBL();
            return productTypeBL.listProductType();
        }
    }
}
