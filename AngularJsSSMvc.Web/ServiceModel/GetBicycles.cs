using AngularJsSSMvc.Web.ServiceModel.Types;
using ServiceStack.ServiceHost;
using System.Collections.Generic;


namespace AngularJsSSMvc.Web.ServiceModel
{
    [Route("/bicycles","GET")]
    public class GetBicycles: IReturn<List<Bicycle>>
    {
    }
}