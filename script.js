document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch gold price from Yahoo Finance API
    function fetchYahooFinanceData() {
        const url = 'https://yahoo-finance-api-data.p.rapidapi.com/search/list-detail?id=a4f8a58b-e458-44fe-b304-04af382a364e&limit=10&offset=0';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'yahoo-finance-api-data.p.rapidapi.com',
                'x-rapidapi-key': 'a03ca7726dmsh889fac9d2e108d2p1c3972jsn72c34be02b2d'
            }
        };

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Log the full response to inspect it
                // Adjust this according to the actual response structure
                const goldPrice = data.results[0].price; // Modify based on actual data
                document.getElementById("goldPriceValue").innerText = `$${goldPrice.toFixed(2)}`;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                document.getElementById("goldPriceValue").innerText = 'Failed to fetch price. ' + error.message;
            });
    }

    // Fetch gold price on page load
    fetchYahooFinanceData();

    // Function to go back to the previous page
    window.goBack = function() {
        window.history.back();
    };

    // Function to allow notifications
    window.allowNotifications = function() {
        if (Notification && Notification.permission === "granted") {
            alert("Notifications are already allowed.");
        } else if (Notification && Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    alert("Notifications allowed. You will now receive updates.");
                } else {
                    alert("Notifications blocked. You won't receive updates.");
                }
            });
        } else {
            alert("Your browser does not support notifications.");
        }
    };

    // Function for biometric login
    window.biometricLogin = function() {
        // Simulating biometric authentication success
        alert("Biometric login successful!");
        window.location.href = "dashboard.html"; // Redirect to the dashboard page after successful login
    };

    // Function to create an account
    window.createAccount = function(event) {
        event.preventDefault(); // Prevents the form from refreshing the page

        // Simulating account creation success
        alert("Account created successfully!");
        window.location.href = "dashboard.html"; // Redirect to the dashboard page after successful account creation
    };

    // Function to save gold investment (you can expand this based on your needs)
    window.saveGoldInvestment = function(event) {
        event.preventDefault(); // Prevents the form from refreshing the page
        const goldGrams = document.getElementById("goldGrams").value;
        const goldPrice = document.getElementById("goldPrice").value;

        // Perform your save operation here, e.g., storing it in localStorage or sending to a server
        alert(`Gold Investment Saved!\nGrams: ${goldGrams}\nPrice per Gram: $${goldPrice}`);
    };
});
