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
    public class SiglasController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public SiglasController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/Siglas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Siglas>>> GetSiglas()
        {
            return await _context.Siglas.ToListAsync();
        }

        // GET: api/Siglas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Siglas>> GetSiglas(string id)
        {
            var siglas = await _context.Siglas.FindAsync(id);

            if (siglas == null)
            {
                return NotFound();
            }

            return siglas;
        }
    }
}
