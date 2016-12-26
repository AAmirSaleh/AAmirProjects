using ServiceStack.ServiceHost;
using AngularJsSSMvc.Web.ServiceModel.Types;

namespace AngularJsSSMvc.Web.ServiceModel
{
    [Route("/bicycles","POST")]
    public class PostBicycle: IReturn<Bicycle>
    {
        public Bicycle Bicycle { get; set; }
    }
}