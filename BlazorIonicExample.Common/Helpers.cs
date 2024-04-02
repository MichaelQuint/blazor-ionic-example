using System.Text.RegularExpressions;

namespace BlazorIonicExample.Common
{
    public class Helpers
    {
        /// <summary>
        /// Generates a unique url safe GUID
        /// </summary>
        public static string GetUniqueHashCode()
        {
            return Regex.Replace(Convert.ToBase64String(Guid.NewGuid().ToByteArray()), "[/+=]", "");
        }

        /// <summary>
        /// Generates a hash string based on the current date and time
        /// F: Sunday, June 15, 2008 9:15:07 PM
        /// </summary>
        public static string GetChangeHashCode(DateTime? changeDate = null)
        {
            if (changeDate != null)
                return string.Format("{0:X}", ((DateTime)changeDate).ToString("F").GetHashCode());
            else
                return string.Format("{0:X}", DateTime.Now.ToString("F").GetHashCode());
        }
    }

    /// <summary>
    /// Helper methods for the strings.
    /// </summary>
    public static class StringExtensions
    {
        /// <summary>
        /// Uppercases first charactor of string
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public static string FirstCharToUpper(this string input)
        {
            switch (input)
            {
                case null: return input;
                case "": return input;
                default: return input[0].ToString().ToUpper() + input.Substring(1);
            }
        }

        /// <summary>
        /// Generates a deterministic hash code similar to string.GetHashCode()
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        /// <see cref="https://andrewlock.net/why-is-string-gethashcode-different-each-time-i-run-my-program-in-net-core/"/>
        public static string GetDeterministicHashCode(this string input)
        {
            unchecked
            {
                int hash1 = (5381 << 16) + 5381;
                int hash2 = hash1;

                for (int i = 0; i < input.Length; i += 2)
                {
                    hash1 = ((hash1 << 5) + hash1) ^ input[i];
                    if (i == input.Length - 1)
                        break;
                    hash2 = ((hash2 << 5) + hash2) ^ input[i + 1];
                }

                return string.Format("{0:X}", hash1 + (hash2 * 1566083941));
            }
        }
    }
}