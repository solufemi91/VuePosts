using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Interview_solufemi91.Models
{
    public class BlogComment
    {
        public int CommentId { get; set; }
        public int BlogPostId { get; set; }
        public string Comment { get; set; }
        public DateTime CommentedOn { get; set; }       
    }
}
