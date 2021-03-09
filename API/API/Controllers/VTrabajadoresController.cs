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
    public class VTrabajadoresController : ControllerBase
    {
        private readonly BootcampDBContext _context;

        public VTrabajadoresController(BootcampDBContext context)
        {
            _context = context;
        }

        // GET: api/VTrabajadores
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VTrabajadores>>> GetVTrabajadores()
        {
            return await _context.VTrabajadores.ToListAsync();
        }

        // GET: api/VTrabajadores/5
        [HttpGet("{id}")]
        public async Task<ActionResult<VTrabajadores>> GetVTrabajadores(int id)
        {
            var vTrabajadores = await _context.VTrabajadores.FindAsync(id);

            if (vTrabajadores == null)
            {
                return NotFound();
            }

            return vTrabajadores;
        }
    }
}
