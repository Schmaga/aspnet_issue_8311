using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // working version WITH compat switch
        [HttpPost]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            return Ok();
        }

        // working version WITHOUT compat switch
        /*[HttpPost]
        public async Task<IActionResult> UploadFile([FromForm(Name = "file")] IFormFile file)
        {
            return Ok();
        }*/
    }
}
