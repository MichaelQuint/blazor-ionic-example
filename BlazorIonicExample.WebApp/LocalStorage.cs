using Microsoft.JSInterop;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace BlazorIonicExample.WebApp
{
    public interface ILocalStorage
    {
        Task SetAsync(string key, object value);
        Task<T> GetAsync<T>(string key);
        Task RemoveAsync(string key);
        Task ClearAsync();
    }
    public class LocalStorage : ILocalStorage
    {
        private readonly IJSRuntime JsRuntime;
        private readonly JsonSerializerOptions JsonSerializerOptions = new JsonSerializerOptions()
        {
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
        };

        public LocalStorage(IJSRuntime jsRuntime)
        {
            JsRuntime = jsRuntime;
        }

        public async Task SetAsync(string key, object value)
        {
            if (value != null)
            {
                string jsVal = JsonSerializer.Serialize(value, JsonSerializerOptions);
                await JsRuntime.InvokeVoidAsync("localStorage.setItem", [key, jsVal]);
            }
        }
        public async Task<T> GetAsync<T>(string key)
        {
            T result = default!;

            string val = await JsRuntime.InvokeAsync<string>("localStorage.getItem", key);

            if (val != null)
                result = JsonSerializer.Deserialize<T>(val, JsonSerializerOptions)!;

            return result;
        }
        public async Task RemoveAsync(string key)
        {
            await JsRuntime.InvokeVoidAsync("localStorage.removeItem", key);
        }
        public async Task ClearAsync()
        {
            await JsRuntime.InvokeVoidAsync("localStorage.clear");
        }
    }
}