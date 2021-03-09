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
    public class ClasePersController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public ClasePersController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/ClasePers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClasePer>>> GetClasePer()
        {
            return await _context.ClasePer.ToListAsync();
        }

        // GET: api/ClasePers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClasePer>> GetClasePer(string id)
        {
            var clasePer = await _context.ClasePer.FindAsync(id);

            if (clasePer == null)
            {
                return NotFound();
            }

            return clasePer;
        }
    }
}
