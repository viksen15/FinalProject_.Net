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
    public class GruposController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public GruposController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/Grupos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Grupos>>> GetGrupos()
        {
            return await _context.Grupos.ToListAsync();
        }

        // GET: api/Grupos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Grupos>> GetGrupos(string id)
        {
            var grupos = await _context.Grupos.FindAsync(id);

            if (grupos == null)
            {
                return NotFound();
            }

            return grupos;
        }
    }
}
