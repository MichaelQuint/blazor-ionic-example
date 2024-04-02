using BlazorIonicExample.Common;
using BlazorIonicExample.Common.JsonModels;
using BlazorIonicExample.WebApp.Models;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Net.Http.Json;

namespace BlazorIonicExample.WebApp.Bases
{
    public class PageComponetBase<TPageModel> : ComponentBase where TPageModel : PageModel, new()
    {
        [Inject] protected HttpClient Http { get; set; }
        [Inject] protected IJSRuntime JsRuntime { get; set; }
        [Inject] protected LocalStorage LocalStorage { get; set; }
        [Inject] protected NavigationManager NavigationManager { get; set; }
        [Inject] protected PageModelBase ModelBase { get; set; }

        public TPageModel Model { get; set; } = new TPageModel();

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            await base.OnAfterRenderAsync(firstRender);

            if (firstRender)
            {
                // Load the PageModel from Singleton<PageModelBase>
                Model.Load(ModelBase);

                // Check the Singleton<PageModelBase> for the user so we dont load from LocalStorage again
                if (ModelBase.User == null)
                {
                    // Try to load the user from localStorage
                    ModelBase.User = await LocalStorage.GetAsync<UserJson>("User");

                    Model.Load(ModelBase);
                }

                // Check the Singleton<PageModelBase> for the forecasts so we dont load from LocalStorage again
                if (ModelBase.Forecasts == null)
                {
                    // Try to load the forecasts from localStorage
                    ModelBase.Forecasts = await LocalStorage.GetAsync<WeatherForecastJson[]>("WeatherForecasts");

                    Model.Load(ModelBase);
                }

                // Check the Model for the user instead of the Singleton<PageModelBase>
                if (Model.User == null)
                {
                    bool isLoginPage = typeof(TPageModel) == typeof(LoginModel);
                    if (!isLoginPage)
                    {
                        await LocalStorage.ClearAsync();
                        NavigationManager.NavigateTo("/", true);
                    }
                }
            }
        }

        public async Task<bool> RegisterAsync(string username, string password, string firstName, string lastName)
        {
            RegisterJson registerModel = new RegisterJson();
            registerModel.Username = username;
            registerModel.PasswordHash = password.GetDeterministicHashCode();
            registerModel.FirstName = firstName;
            registerModel.LastName = lastName;

            // Below is an example of sending the RegisterModel to a WebAPI endpoint and getting the result.
            // For this demo we will just hash the password and store it in LocalStorage.
            // DO NOT STORE THE PASSWORD HASH IN LOCALSTORAGE FOR PROD!

            //var response = await Http.PostAsJsonAsync("https://your.webapi.com/endpoint/register", registerModel);
            //ModelBase.User = response.Content.ReadFromJsonAsync<UserJson>().Result;

            ModelBase.User = new UserJson();
            ModelBase.User.Username = registerModel.Username;
            ModelBase.User.PasswordHash = registerModel.PasswordHash;
            ModelBase.User.FirstName = registerModel.FirstName;
            ModelBase.User.LastName = registerModel.LastName;

            if (ModelBase.User != null)
            {
                _ = LocalStorage.SetAsync("User", ModelBase.User);

                if (ModelBase.Forecasts == null)
                {
                    await JsRuntime.InvokeVoidAsync("console.log", "INFORMATION: ModelBase.Forecasts is null.");
                    await JsRuntime.InvokeVoidAsync("console.log", "INFORMATION: fetching 'WeatherForecasts' 'sample-data/weather.json'.");
                    ModelBase.Forecasts = await Http.GetFromJsonAsync<WeatherForecastJson[]>("sample-data/weather.json");

                    // Save forecasts to LocalStorage but dont await so we do not hold up the app
                    _ = LocalStorage.SetAsync("WeatherForecasts", ModelBase.Forecasts);
                }

                return true;
            }
            else
            {
                return false;
            }
        }
        public async Task<bool> LoginAsync(string username, string password)
        {
            LoginJson loginModel = new LoginJson();
            loginModel.Username = username;
            loginModel.PasswordHash = password.GetDeterministicHashCode();

            // Below is an example of sending the LoginModel to a WebAPI endpoint and getting the result.
            // For this demo we will just hash the password and store it in LocalStorage.
            // DO NOT STORE THE PASSWORD HASH IN LOCALSTORAGE FOR PROD!

            //var response = await Http.PostAsJsonAsync("https://your.webapi.com/endpoint/login", loginModel);
            //ModelBase.User = response.Content.ReadFromJsonAsync<UserJson>().Result;

            await JsRuntime.InvokeVoidAsync("console.log", "INFORMATION: fetching from 'sample-data/users.json'.");
            var results = await Http.GetFromJsonAsync<List<UserJson>>("sample-data/users.json") ?? new List<UserJson>();
            var result = results.Where(u => u.Username == loginModel.Username && u.PasswordHash == loginModel.PasswordHash).SingleOrDefault();

            if (result != null)
            {
                ModelBase.User = result;

                await JsRuntime.InvokeVoidAsync("console.log", "INFORMATION: fetching from 'sample-data/weather.json'.");
                ModelBase.Forecasts = await Http.GetFromJsonAsync<WeatherForecastJson[]>("sample-data/weather.json");

                // Save forecasts to LocalStorage but dont await so we do not hold up the app.
                _ = LocalStorage.SetAsync("User", ModelBase.User);
                _ = LocalStorage.SetAsync("WeatherForecasts", ModelBase.Forecasts);

                return true;
            }
            else
            {
                return false;
            }
        }
        public async Task LogoutAsync()
        {
            await LocalStorage.ClearAsync();
            NavigationManager.NavigateTo("/", true);
        }
    }
}