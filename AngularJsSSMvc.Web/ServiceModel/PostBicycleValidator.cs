using AngularJsSSMvc.Web.ServiceModel.Types;
using AngularJsSSMvc.Web.ServiceModel;
using ServiceStack.FluentValidation;

namespace AngularJsSSMvc.Web.ServiceModel
{
    public class PostBicycleValidator: AbstractValidator<PostBicycle>
    {
        public PostBicycleValidator(BicycleValidator BicycleValidator)
        {
            RuleFor(r=>r.Bicycle).SetValidator(BicycleValidator);
        }
    }
}