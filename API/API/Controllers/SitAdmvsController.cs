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
    public class SitAdmvsController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public SitAdmvsController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/SitAdmvs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SitAdmv>>> GetSitAdmv()
        {
            return await _context.SitAdmv.ToListAsync();
        }

        // GET: api/SitAdmvs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SitAdmv>> GetSitAdmv(string id)
        {
            var sitAdmv = await _context.SitAdmv.FindAsync(id);

            if (sitAdmv == null)
            {
                return NotFound();
            }

            return sitAdmv;
        }
    }
}
