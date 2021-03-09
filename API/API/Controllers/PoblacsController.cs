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
    public class PoblacsController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public PoblacsController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/Poblacs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Poblac>>> GetPoblac()
        {
            return await _context.Poblac.ToListAsync();
        }

        // GET: api/Poblacs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Poblac>> GetPoblac(string id)
        {
            var poblac = await _context.Poblac.FindAsync(id);

            if (poblac == null)
            {
                return NotFound();
            }

            return poblac;
        }
    }
}
