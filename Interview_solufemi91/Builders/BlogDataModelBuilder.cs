using Interview_solufemi91.Models;
using Interview_solufemi91.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Interview_solufemi91.Builders
{
    public class BlogDataModelBuilder : IBlogDataModelBuilder
    {
        private readonly IBlogRepository _blogRepository;
        public BlogDataModelBuilder(IBlogRepository blogRepository)
        {
            _blogRepository = blogRepository;
        }

        public BlogDataModel GetModel()
        {
            var blogPosts = _blogRepository.GetAllBlogPost();
            var blogPostComments = _blogRepository.GetAllBlogPostComments();
            var blogData = new BlogDataModel();

            foreach (var blogPost in blogPosts)
            {
                var applicableBlogComments = blogPostComments?.Where(bc => bc.BlogPostId == blogPost.BlogPostId);
                if(applicableBlogComments.Count() != 0 && applicableBlogComments != null)
                {
                    blogPost.BlogComments.AddRange(applicableBlogComments);
                }              
            }

            blogData.Results = blogPosts;

            return blogData;
        }
    }
}
