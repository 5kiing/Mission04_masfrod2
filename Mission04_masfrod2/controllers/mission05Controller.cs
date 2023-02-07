using Microsoft.AspNetCore.Mvc;
using Mission04_masfrod2.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_masfrod2.controllers
{
    // controller for program created for HomePage and for GradeCalc form
    public class mission05Controller : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
         // get method for grade calculator
        [HttpGet]
        public IActionResult gradeCalc ()
        {
            return View();
        }
        // post method for grade calculator
        [HttpPost]
        public IActionResult gradeCalc (gradeCalcModel model)
        {
            return View();
        }
    }
}
