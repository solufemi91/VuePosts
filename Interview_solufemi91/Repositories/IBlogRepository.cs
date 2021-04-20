using Interview_solufemi91.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Interview_solufemi91.Repositories
{
    public interface IBlogRepository
    {
        List<BlogPost> GetAllBlogPost();

        List<BlogComment> GetAllBlogPostComments();
    }
}
