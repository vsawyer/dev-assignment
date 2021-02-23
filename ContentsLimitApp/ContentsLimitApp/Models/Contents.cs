using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContentsLimitApp.Models
{
    public class Contents
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string name { get; set; }

        public double amount { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string category { get; set; }
    }
}
