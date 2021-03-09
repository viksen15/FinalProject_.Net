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
    public class EscalasController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public EscalasController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/Escalas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Escala>>> GetEscala()
        {
            return await _context.Escala.ToListAsync();
        }

        // GET: api/Escalas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Escala>> GetEscala(string id)
        {
            var escala = await _context.Escala.FindAsync(id);

            if (escala == null)
            {
                return NotFound();
            }

            return escala;
        }
    }
}
