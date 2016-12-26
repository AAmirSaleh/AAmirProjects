using ServiceStack.FluentValidation;
using AngularJsSSMvc.Web.ServiceModel.Types;

namespace AngularJsSSMvc.Web.ServiceModel
{
    public class PutBicycleValidator: AbstractValidator<PutBicycle>
    {
        public PutBicycleValidator(BicycleValidator bicylcleValidator)
        {
            RuleFor(r => r.Bicycle).SetValidator(bicylcleValidator);
        }
    }
}