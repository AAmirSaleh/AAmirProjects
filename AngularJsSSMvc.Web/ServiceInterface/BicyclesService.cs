using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AngularJsSSMvc.Web.ServiceModel;
using AngularJsSSMvc.Web.ServiceModel.Types;
using ServiceStack.ServiceHost;

namespace RentThatBykeWithServices.Web.ServiceInterface
{
    public class BicyclesService: IService
    {
        public BicycleRepository BicycleRepository { get; set; }

        public List<Bicycle> Get(GetBicycles request)
        {
            return BicycleRepository.GetAll().ToList();
        }

        public Bicycle Get(GetBicycle request)
        {
            return BicycleRepository.Single(b => b.Id == request.Id);
        }

        public Bicycle Post(Bicycle request)
        {
            BicycleRepository.Add(request);
            return request;
        }

        public Bicycle Put(Bicycle request)
        {
            Bicycle bicycle = BicycleRepository.Single(b => b.Id == request.Id);

            bicycle.Name = request.Name;
            bicycle.Type = request.Type;
            bicycle.Quantity = request.Quantity;
            bicycle.RentPrice = request.RentPrice;
            return request;
        }
    }

}