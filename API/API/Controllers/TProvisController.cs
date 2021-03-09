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
    public class TProvisController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public TProvisController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/TProvis
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TProvis>>> GetTProvis()
        {
            return await _context.TProvis.ToListAsync();
        }

        // GET: api/TProvis/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TProvis>> GetTProvis(string id)
        {
            var tProvis = await _context.TProvis.FindAsync(id);

            if (tProvis == null)
            {
                return NotFound();
            }

            return tProvis;
        }
    }
}
