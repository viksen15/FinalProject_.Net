using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FRONTEND.Controllers
{
    public class PaginasController : Controller
    {
        public IActionResult Error404()
        {
            return View();
        }
        public IActionResult FichaTrabajador()
        {
            return View();
        }
        public IActionResult MensajesTrabajador()
        {
            return View();
        }
    }
}
