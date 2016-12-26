using AngularJsSSMvc.Web.ServiceModel.Types;
using ServiceStack.ServiceHost;

namespace AngularJsSSMvc.Web.ServiceModel
{
    [Route("/bicycles/{Id}" ,"GET")]
    public class GetBicycle : IReturn<Bicycle>
    {
        public int Id { get; set; }
    }
}