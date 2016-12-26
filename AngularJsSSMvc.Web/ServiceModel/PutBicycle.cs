using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ServiceStack.ServiceHost;
using AngularJsSSMvc.Web.ServiceModel.Types;

namespace AngularJsSSMvc.Web.ServiceModel
{
    [Route("/bicycles/{Id}", "PUT")]
    public class PutBicycle
    {
        public Bicycle Bicycle { get; set; }
    }
}