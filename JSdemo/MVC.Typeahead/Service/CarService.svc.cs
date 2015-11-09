namespace MVC.Typeahead.Service
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Runtime.Serialization;
    using System.Runtime.Serialization.Json;
    using System.ServiceModel;
    using System.ServiceModel.Activation;
    using System.ServiceModel.Web;
    using System.Text;
    using System.Threading;

    [ServiceContract(Namespace = "")]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class CarService : ICarService
    {
        // To use HTTP GET, add [WebGet] attribute. (Default ResponseFormat is WebMessageFormat.Json)
        // To create an operation that returns XML,
        //     add [WebGet(ResponseFormat=WebMessageFormat.Xml)],
        //     and include the following line in the operation body:
        //         WebOperationContext.Current.OutgoingResponse.ContentType = "text/xml";

        public CarService()
        {

        }

        [OperationContract]
        [WebGet(ResponseFormat = WebMessageFormat.Json)]
        public IEnumerable<CarViewModel> GetCars(string search)
        {
            Thread.Sleep(1000);
            search = search.ToUpperInvariant();

            return string.IsNullOrEmpty(search) 
                ? null 
                : xx.FindAll(x => x.Brand.ToUpperInvariant().Contains(search) || x.Model.ToUpperInvariant().Contains(search) || x.Variant.ToUpperInvariant().Contains(search));
        }

        [OperationContract]
        [WebGet(ResponseFormat = WebMessageFormat.Json)]
        public CarViewModel GetCar(int id)
        {
            return xx.FirstOrDefault(x => x.Id == id);
        }

        private static List<CarViewModel> xx = new List<CarViewModel>
                                                   {
                                                       new CarViewModel
                                                           {
                                                               Id = 1,
                                                               Brand = "Audi",
                                                               Model = "A4",
                                                               Variant = "1.8 TDI Avant",
                                                               Price = "412.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Id = 2,
                                                               Brand = "Audi",
                                                               Model = "A4",
                                                               Variant = "2.0 TDI Avant",
                                                               Price = "212.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Id = 3,
                                                               Brand = "Audi",
                                                               Model = "S4",
                                                               Variant = "2.0 TDI Avant",
                                                               Price = "212.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Id = 4,
                                                               Brand = "Audi",
                                                               Model = "S4",
                                                               Variant = "2.0 TDI Avant",
                                                               Price = "212.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Id = 5,
                                                               Brand = "Audi",
                                                               Model = "RS4",
                                                               Variant = "2.0 TDI Avant",
                                                               Price = "212.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Id = 6,
                                                               Brand = "Audi",
                                                               Model = "RS4",
                                                               Variant = "2.0 TDI Avant",
                                                               Price = "212.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Id = 7,
                                                               Brand = "BMW",
                                                               Model = "114d",
                                                               Variant = "3d",
                                                               Price = "212.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Id = 8,
                                                               Brand = "BMW",
                                                               Model = "116d",
                                                               Variant = "d5",
                                                               Price = "212.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Id = 9,
                                                               Brand = "Citroën",
                                                               Model = "C4",
                                                               Variant = "Picasso 1,6 e-HDi 115 Intensive",
                                                               Price = "212.000"
                                                           },

                                                   };
    }
}
