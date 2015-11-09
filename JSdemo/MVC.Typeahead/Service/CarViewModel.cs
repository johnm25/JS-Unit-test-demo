namespace MVC.Typeahead.Service
{
    public class CarViewModel
    {
        protected internal CarViewModel() { }
        public int Id { get; set; }
        public string Variant { get; set; }
        public string Model { get; set; }
        public string Brand { get; set; }
        public string Price { get; set; }
    }
}