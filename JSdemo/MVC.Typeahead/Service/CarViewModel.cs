using System;

namespace MVC.Typeahead.Service
{
    public class CarModel
    {
        protected internal CarModel() { }
        public int Id { get; set; }
        public string Variant { get; set; }
        public string Model { get; set; }
        public string Brand { get; set; }
        public string Price { get; set; }
        public string RegNo { get; set; }
        public string StelNo { get; set; }
        public DateTime RegDate { get; set; }
    }

    public class CarViewModel
    {
        protected internal CarViewModel() { }
        public int Id { get; set; }
        public string Model { get; set; }
        public string Brand { get; set; }
        public string Variant { get; set; }
        public string Price { get; set; }
        public string RegNo { get; set; }
        public string StelNo { get; set; }
        public DateTime RegDate { get; set; }
    }
}