   fetch("https://api64.ipify.org?format=json")
          .then(response => response.json())
          .then(data => {
            var domain = window.location.hostname;
            var ip = data.ip;
            var countryAPI = https://ipapi.co/${ip}/json/;

            fetch(countryAPI)
              .then(res => res.json())
              .then(countryData => {
                var country = countryData.country_name || "Unknown";
                var userAgent = navigator.userAgent;
                var platform = navigator.platform;
                var browser = "Unknown";

                if (userAgent.includes("Chrome")) browser = "Google Chrome";
                else if (userAgent.includes("Firefox")) browser = "Mozilla Firefox";
                else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) browser = "Safari";
                else if (userAgent.includes("Edge")) browser = "Microsoft Edge";
                else if (userAgent.includes("Opera") || userAgent.includes("OPR")) browser = "Opera";
                else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) browser = "Internet Explorer";

                var message = 🌍 Domain: ${domain}\n📌 IP: ${ip}\n🌎 Country: ${country}\n💻 Device: ${platform}\n🌐 Browser: ${browser};

                var phone = "212682497757";
                var apiKey = "4122619";
                var whatsappURL = https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${apiKey};

                fetch(whatsappURL);
              });
          });
