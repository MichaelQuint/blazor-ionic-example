using BlazorIonicExample.Common;
using System.Text.RegularExpressions;

namespace BlazorIonicExample.WebApp.Models
{
    public class LoginModel : PageModel
    {
        private string username = "";
        public string Username
        {
            get
            {
                return username;
            }
            set
            {
                value = Regex.Replace(value, "[^a-zA-Z0-9]", "");
                username = value;
            }
        }

        private string password = "";
        public string Password
        {
            get
            {
                return password;
            }
            set
            {
                password = value;
            }
        }

        private string firstName = "";
        public string FirstName
        {
            get
            {
                return firstName;
            }
            set
            {
                value = Regex.Replace(value, "[^a-zA-Z]", "");
                value = value.FirstCharToUpper();
                firstName = value;
            }
        }

        private string lastName = "";
        public string LastName
        {
            get
            {

                return lastName;
            }
            set
            {
                value = Regex.Replace(value, "[^a-zA-Z]", "");
                value = value.FirstCharToUpper();
                lastName = value;
            }
        }

        public string LoginError = "";
        public string RegisterError = "";
        public bool RegisterDisabled
        {
            get
            {
                return (Username == "" && Password == "" && FirstName == "" && LastName == "");
            }
        }
        public bool LoginDisabled
        {
            get
            {
                return (Username == "" && Password == "");
            }
        }
    }
}