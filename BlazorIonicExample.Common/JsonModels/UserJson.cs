using System.Text.Json.Serialization;

namespace BlazorIonicExample.Common.JsonModels
{
    public class UserJson
    {
        // JSON properties
        public string? Username { get; set; }
        public string? PasswordHash { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        // Helper properties not stored in JSON
        [JsonIgnore]
        public string Name
        {
            get
            {
                if (FirstName != null && LastName != null)
                    return $"{FirstName} {LastName}";
                else
                    return "";
            }
        }
        [JsonIgnore]
        public string ShortName
        {
            get
            {
                if (FirstName != null && LastName != null)
                    return $"{FirstName} {LastName.FirstOrDefault()}";
                else
                    return "";
            }
        }
    }
}