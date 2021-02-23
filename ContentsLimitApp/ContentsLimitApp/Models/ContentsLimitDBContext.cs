using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContentsLimitApp.Models
{
    public class ContentsLimitDBContext:DbContext
    {

        public ContentsLimitDBContext(DbContextOptions<ContentsLimitDBContext> options):base(options)
        {

        }
        public DbSet<Contents> Contents { get; set; }

    }
}
