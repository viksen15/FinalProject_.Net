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
    public class ProvinciasController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public ProvinciasController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/Provincias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Provincias>>> GetProvincias()
        {
            return await _context.Provincias.ToListAsync();
        }

        // GET: api/Provincias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Provincias>> GetProvincias(string id)
        {
            var provincias = await _context.Provincias.FindAsync(id);

            if (provincias == null)
            {
                return NotFound();
            }

            return provincias;
        }
    }
}
