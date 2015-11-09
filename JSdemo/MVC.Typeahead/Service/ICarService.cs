namespace MVC.Typeahead.Service
{
    using System.Collections.Generic;

    public interface ICarService
    {
        IEnumerable<CarViewModel> GetCars(string query);
        CarViewModel GetCar(int id);
    }
}