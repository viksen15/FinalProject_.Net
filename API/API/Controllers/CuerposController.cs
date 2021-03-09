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
    public class CuerposController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public CuerposController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/Cuerpos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cuerpos>>> GetCuerpos()
        {
            return await _context.Cuerpos.ToListAsync();
        }

        // GET: api/Cuerpos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cuerpos>> GetCuerpos(string id)
        {
            var cuerpos = await _context.Cuerpos.FindAsync(id);

            if (cuerpos == null)
            {
                return NotFound();
            }

            return cuerpos;
        }
    }
}
