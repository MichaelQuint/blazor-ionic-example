using BlazorIonicExample.Common.JsonModels;

namespace BlazorIonicExample.WebApp.Bases
{
    // This class should only contain data that needs to be
    // accessed accross all pages of the app. For this demo
    // we will just use the weather forecast data provided
    // by the default project and a mock user.

    public interface IPageModelBase
    {
        UserJson? User { get; set; }
        WeatherForecastJson[]? Forecasts { get; set; }
    }

    public class PageModelBase : IPageModelBase
    {
        public UserJson? User { get; set; }
        public WeatherForecastJson[]? Forecasts { get; set; }
    }
}