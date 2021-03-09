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
    public class SubescalasController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public SubescalasController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/Subescalas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Subescala>>> GetSubescala()
        {
            return await _context.Subescala.ToListAsync();
        }

        // GET: api/Subescalas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Subescala>> GetSubescala(string id)
        {
            var subescala = await _context.Subescala.FindAsync(id);

            if (subescala == null)
            {
                return NotFound();
            }

            return subescala;
        }
    }
}
