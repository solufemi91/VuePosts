using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Interview_solufemi91.Models
{
    public class BlogPost
    {
        public int BlogPostId { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime PublishedOn { get; set; }
        public List<BlogComment> BlogComments { get; set; } = new List<BlogComment>();
        public bool DisplayComments { get; set; }
    }
}
