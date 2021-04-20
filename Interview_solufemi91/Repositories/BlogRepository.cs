using Dapper;
using Interview_solufemi91.Models;
using Interview_solufemi91.Wrapper;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace Interview_solufemi91.Repositories
{
    public class BlogRepository : IBlogRepository
    {
        private SqlConnection _sqlConnection;
        private readonly IConfigurationWrapper _configurationWrapper;


        public BlogRepository(IConfigurationWrapper configurationWrapper)
        {
            _configurationWrapper = configurationWrapper;
        }

        public IEnumerable<BlogPost> GetAllBlogPost()
        {
            using (_sqlConnection = new SqlConnection(_configurationWrapper.ConnectionString))
            {
                _sqlConnection.Open();
                return _sqlConnection.Query<BlogPost>(StoredProcedureKeys.GetAllBlogPosts, null, commandType: CommandType.StoredProcedure);
            }
        }

        public IEnumerable<BlogComment> GetAllBlogPostComments()
        {
            using (_sqlConnection = new SqlConnection(_configurationWrapper.ConnectionString))
            {
                _sqlConnection.Open();
                return _sqlConnection.Query<BlogComment>(StoredProcedureKeys.GetAllBlogPostComments, null, commandType: CommandType.StoredProcedure);
            }
        }

    }
}
