using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ContentsLimitApp.Models;

namespace ContentsLimitApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentsController : ControllerBase
    {
        private readonly ContentsLimitDBContext _context;

        public ContentsController(ContentsLimitDBContext context)
        {
            _context = context;
        }

        // GET: api/Contents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contents>>> GetContents()
        {
            return await _context.Contents.ToListAsync();
        }

        // GET: api/Contents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contents>> GetContents(int id)
        {
            var contents = await _context.Contents.FindAsync(id);

            if (contents == null)
            {
                return NotFound();
            }

            return contents;
        }

        // PUT: api/Contents/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContents(int id, Contents contents)
        {
            contents.id = id;

            _context.Entry(contents).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContentsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Contents
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Contents>> PostContents(Contents contents)
        {
            _context.Contents.Add(contents);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContents", new { id = contents.id }, contents);
        }

        // DELETE: api/Contents/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContents(int id)
        {
            var contents = await _context.Contents.FindAsync(id);
            if (contents == null)
            {
                return NotFound();
            }

            _context.Contents.Remove(contents);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContentsExists(int id)
        {
            return _context.Contents.Any(e => e.id == id);
        }
    }
}
