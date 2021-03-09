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
    public class NivOrgsController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public NivOrgsController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/NivOrgs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NivOrg>>> GetNivOrg()
        {
            return await _context.NivOrg.ToListAsync();
        }

        // GET: api/NivOrgs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NivOrg>> GetNivOrg(string id)
        {
            var nivOrg = await _context.NivOrg.FindAsync(id);

            if (nivOrg == null)
            {
                return NotFound();
            }

            return nivOrg;
        }
    }
}
