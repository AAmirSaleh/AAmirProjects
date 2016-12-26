using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Funq;
using AngularJsSSMvc.Web.ServiceModel;
using AngularJsSSMvc.Web.ServiceModel.Types;
using ServiceStack.Common.Web;
using ServiceStack.ServiceInterface.Validation;
using ServiceStack.Text;
using ServiceStack.WebHost.Endpoints;

namespace AngularJsSSMvc.Web
{
    public class AppHost:AppHostBase
    {
        public AppHost()
            : base("Rent That Bike! mvc5", typeof(AppHost).Assembly)
        {
        }

        public override void Configure(Container container)
        {
            JsConfig.EmitCamelCaseNames = true;
            SetConfig(CreateEndpointHostConfig());

            Plugins.Add(new ValidationFeature());
            container.RegisterValidators(typeof(AppHost).Assembly);

            container.RegisterAutoWired<BicycleRepository>();
        }

        protected virtual EndpointHostConfig CreateEndpointHostConfig()
        {
            return new EndpointHostConfig
            {
                DebugMode = true,
                DefaultContentType = ContentType.Json,
                ServiceStackHandlerFactoryPath = "sss"
            };
        }
    }
}