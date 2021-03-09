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
    public class OrganigsController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public OrganigsController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/Organigs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Organig>>> GetOrganig()
        {
            return await _context.Organig.ToListAsync();
        }

        // GET: api/Organigs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Organig>> GetOrganig(string id)
        {
            var organig = await _context.Organig.FindAsync(id);

            if (organig == null)
            {
                return NotFound();
            }

            return organig;
        }
    }
}
