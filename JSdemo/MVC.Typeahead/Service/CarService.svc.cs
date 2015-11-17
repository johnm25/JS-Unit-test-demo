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
                : xx.FindAll(x => x.Brand.ToUpperInvariant().Contains(search) || x.Model.ToUpperInvariant().Contains(search) || x.Variant.ToUpperInvariant().Contains(search))
                                        .Select(y => new CarViewModel
                                        {
                                            Brand = y.Brand,
                                            Model = y.Model ,
                                            Variant= y.Variant,
                                            RegDate = y.RegDate,
                                            RegNo = y.RegNo,
                                            StelNo = y.StelNo,
                                            Id = y.Id,
                                            Price = y.Price
                                        });
        }

        [OperationContract]
        [WebGet(ResponseFormat = WebMessageFormat.Json)]
        public IEnumerable<CarViewModel> GetCarRegistration(string search)
        {
            Thread.Sleep(1000);
            search = search.ToUpperInvariant();

            return string.IsNullOrEmpty(search)
                ? null
                : xx.FindAll(x => x.RegNo.ToUpperInvariant().Contains(search) || x.StelNo.ToUpperInvariant().Contains(search))
                    .Select(y => new CarViewModel
                    {
                        Brand = y.Brand,
                        Model = y.Model,
                        Variant = y.Variant,
                        RegDate = y.RegDate,
                        RegNo = y.RegNo,
                        StelNo = y.StelNo,
                        Id = y.Id,
                        Price = y.Price
                    });
        }

        [OperationContract]
        [WebGet(ResponseFormat = WebMessageFormat.Json)]
        public CarViewModel GetCar(int id)
        {
            return xx.Where(x => x.Id == id)
                    .Select(y => new CarViewModel
                    {
                        Brand = y.Brand,
                        Model = y.Model,
                        Variant = y.Variant,
                        RegDate = y.RegDate,
                        RegNo = y.RegNo,
                        StelNo = y.StelNo,
                        Id = y.Id,
                        Price = y.Price
                    }).FirstOrDefault();
            ;
        }

        private static List<CarModel> xx = new List<CarModel>
                                                   {
                                                       new CarModel
                                                           {
                                                               Id = 1,
                                                               Brand = "Audi",
                                                               Model = "A4",
                                                               Variant = "1.8 TDI Avant",
                                                               Price = "412.000",
                                                               RegNo = "YV56842",
                                                               StelNo = "WV2ZZZ70ZRH025139",
                                                               RegDate = new DateTime(2015,01,01),
                                                           },
                                                       new CarModel
                                                           {
                                                               Id = 2,
                                                               Brand = "Audi",
                                                               Model = "A4",
                                                               Variant = "2.0 TDI Avant",
                                                               Price = "212.000",
                                                               RegNo = "LY58434",
                                                               StelNo = "ZAR905A2005163896",
                                                               RegDate = new DateTime(2015,01,01),
                                                           },
                                                       new CarModel
                                                           {
                                                               Id = 3,
                                                               Brand = "Audi",
                                                               Model = "S4",
                                                               Variant = "2.0 TDI Avant",
                                                               Price = "212.000",
                                                               RegNo = "LZ47651",
                                                               StelNo = "ZAR905A2005185566",
                                                               RegDate = new DateTime(2015,01,01),
                                                           },
                                                       new CarModel
                                                           {
                                                               Id = 4,
                                                               Brand = "Audi",
                                                               Model = "A6",
                                                               Variant = "2.0 TDI Avant",
                                                               Price = "212.000",
                                                               RegNo = "MB24348",
                                                               StelNo = "R905A2005188087",
                                                               RegDate = new DateTime(2015,01,01),
                                                           },
                                                       new CarModel
                                                           {
                                                               Id = 5,
                                                               Brand = "Audi",
                                                               Model = "RS4",
                                                               Variant = "2.0 TDI Avant",
                                                               Price = "212.000",
                                                               RegNo = "MD42258",
                                                               StelNo = "ZAR905A2005193146",
                                                               RegDate = new DateTime(2015,01,01),
                                                           },
                                                       new CarModel
                                                           {
                                                               Id = 6,
                                                               Brand = "Audi",
                                                               Model = "A6",
                                                               Variant = "3.0 TDI Avant",
                                                               Price = "212.000",
                                                               RegNo = "MK26597",
                                                               StelNo = "R905A2005228976",
                                                               RegDate = new DateTime(2015,01,01),
                                                           },
                                                       new CarModel
                                                           {
                                                               Id = 7,
                                                               Brand = "BMW",
                                                               Model = "114d",
                                                               Variant = "3d",
                                                               Price = "212.000",
                                                               RegNo = "YE50029",
                                                               StelNo = "ZAR162B3000001865",
                                                               RegDate = new DateTime(2015,01,01),
                                                           },
                                                       new CarModel
                                                           {
                                                               Id = 8,
                                                               Brand = "BMW",
                                                               Model = "116d",
                                                               Variant = "d5",
                                                               Price = "212.000",
                                                               RegNo = "NK57097",
                                                               StelNo = "R162A2000054078",
                                                               RegDate = new DateTime(2015,01,01),
                                                           },
                                                       new CarModel
                                                           {
                                                               Id = 9,
                                                               Brand = "Citroën",
                                                               Model = "C4",
                                                               Variant = "Picasso 1,6 e-HDi 115 Intensive",
                                                               Price = "212.000",
                                                               RegNo = "OC43119",
                                                               StelNo = "R905A2005207565  ",
                                                               RegDate = new DateTime(2015,01,01),
                                                           },

                                                   };
    }
}
