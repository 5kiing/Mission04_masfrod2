using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_masfrod2.models
{
    public class gradeCalcModel
    {
        // data validation, getters, and setters Range is only from 0 to 100
        // when the data entered is wrong, the webpage will warn the user 
        //with a custom message

        [Range(0, 100,
           ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int Assignments { get; set; }
        [Range(0, 100,
            ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int Group { get; set; }
        [Range(0, 100,
            ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int Quiz { get; set; }
        [Range(0, 100,
            ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int Midterm { get; set; }
        [Range(0, 100,
            ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int Final { get; set; }
        [Range(0, 100,
            ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public int Intex { get; set; }
    }
}
