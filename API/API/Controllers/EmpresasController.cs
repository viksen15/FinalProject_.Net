using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresasController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public EmpresasController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/Empresas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empresas>>> GetEmpresas()
        {
            return await _context.Empresas.ToListAsync();
        }

        // GET: api/Empresas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Empresas>> GetEmpresas(string id)
        {
            var empresas = await _context.Empresas.FindAsync(id);

            if (empresas == null)
            {
                return NotFound();
            }

            return empresas;
        }
    }
}
