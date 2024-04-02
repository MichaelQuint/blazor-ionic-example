using BlazorIonicExample.Common.JsonModels;
using BlazorIonicExample.WebApp.Bases;

namespace BlazorIonicExample.WebApp.Models
{
    // This is our base model that is inherited by all
    // other page models.

    public class PageModel : IPageModelBase
    {
        private PageModelBase baseModel = new PageModelBase();

        public UserJson? User
        {
            get
            {
                return baseModel.User;
            }
            set
            {
                baseModel.User = value;
            }
        }
        public WeatherForecastJson[]? Forecasts
        {
            get
            {
                return baseModel.Forecasts;
            }
            set
            {
                baseModel.Forecasts = value;
            }
        }

        public void Load(PageModelBase baseModel)
        {
            this.baseModel = baseModel;
        }
    }
}