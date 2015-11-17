namespace MVC.Typeahead.Service
{
    using System.Collections.Generic;

    public interface ICarService
    {
        IEnumerable<CarViewModel> GetCars(string query);
        IEnumerable<CarViewModel> GetCarRegistration(string query);        
        CarViewModel GetCar(int id);
    }
}