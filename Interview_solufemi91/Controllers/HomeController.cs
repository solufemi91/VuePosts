using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Interview_solufemi91.Models;
using Interview_solufemi91.Repositories;

namespace Interview_solufemi91.Controllers
{
    public class HomeController : Controller
    {
        private readonly IBlogRepository _blogRepository;
        public HomeController(IBlogRepository blogRepository)
        {
            _blogRepository = blogRepository;
        }
        public IActionResult Index()
        {
            var results = _blogRepository.GetAllBlogPostComments();
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
