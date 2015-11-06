namespace MVC.Typeahead.Service
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Runtime.Serialization;
    using System.ServiceModel;
    using System.ServiceModel.Activation;
    using System.ServiceModel.Web;
    using System.Text;
    
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
        public List<CarViewModel> GetCars()
        {
            return xx;
        }

        private static List<CarViewModel> xx = new List<CarViewModel>
                                                   {
                                                       new CarViewModel
                                                           {
                                                               Brand = "Audi",
                                                               Model = "A4",
                                                               Variant = "1.8 TDI Avant",
                                                               Price = "412.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Brand = "Audi",
                                                               Model = "A4",
                                                               Variant = "2.0 TDI Avant",
                                                               Price = "212.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Brand = "Audi",
                                                               Model = "S4",
                                                               Variant = "2.0 TDI Avant",
                                                               Price = "212.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Brand = "Audi",
                                                               Model = "S4",
                                                               Variant = "2.0 TDI Avant",
                                                               Price = "212.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Brand = "Audi",
                                                               Model = "RS4",
                                                               Variant = "2.0 TDI Avant",
                                                               Price = "212.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Brand = "Audi",
                                                               Model = "RS4",
                                                               Variant = "2.0 TDI Avant",
                                                               Price = "212.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Brand = "BMW",
                                                               Model = "114d",
                                                               Variant = "3d",
                                                               Price = "212.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Brand = "BMW",
                                                               Model = "116d",
                                                               Variant = "d5",
                                                               Price = "212.000"
                                                           },
                                                       new CarViewModel
                                                           {
                                                               Brand = "Citroën",
                                                               Model = "C4",
                                                               Variant = "Picasso 1,6 e-HDi 115 Intensive",
                                                               Price = "212.000"
                                                           },

                                                   };
    }

    public interface ICarService
    {
        List<CarViewModel> GetCars();
    }

    public class CarViewModel
    {
        public string Variant { get; set; }
        public string Model { get; set; }
        public string Brand { get; set; }
        public string Price { get; set; }
    }
}
