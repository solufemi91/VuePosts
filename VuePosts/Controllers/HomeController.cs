using Microsoft.AspNetCore.Mvc;
using Interview_solufemi91.Builders;

namespace Interview_solufemi91.Controllers
{
    public class HomeController : Controller
    {
        private readonly IBlogDataModelBuilder _BlogDataModelBuilder;
        public HomeController(IBlogDataModelBuilder BlogDataModelBuilder)
        {
            _BlogDataModelBuilder = BlogDataModelBuilder;
        }
        public IActionResult Index()
        {
            var model = _BlogDataModelBuilder.GetModel();
            return View(model);
        }
    }
}
