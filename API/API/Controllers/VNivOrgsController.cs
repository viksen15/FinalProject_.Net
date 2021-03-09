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
    public class VNivOrgsController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public VNivOrgsController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/VNivOrgs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VNivOrg>>> GetVNivOrg()
        {
            return await _context.VNivOrg.ToListAsync();
        }

        // GET: api/VNivOrgs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VNivOrg>> GetVNivOrg(int id)
        {
            var vNivOrg = await _context.VNivOrg.FindAsync(id);

            if (vNivOrg == null)
            {
                return NotFound();
            }

            return vNivOrg;
        }
    }
}
