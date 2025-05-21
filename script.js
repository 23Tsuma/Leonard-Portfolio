function addRecommendation() {
  // Get the message from the textarea
  let recommendation = document.getElementById("new_recommendation");

  // If the message is not empty
  if (recommendation.value != null && recommendation.value.trim() !== "") {
    // Log to console
    console.log("New recommendation added");

    // Show popup
    showPopup(true);

    // Create new recommendation div
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";

    // Append to recommendation section
    document.getElementById("all_recommendations").appendChild(element);

    // Clear textarea
    recommendation.value = "";

    // Auto-hide popup after 3 seconds (optional)
    setTimeout(() => showPopup(false), 3000);
  }
}

function showPopup(bool) {
  const popup = document.getElementById('popup');
  popup.style.visibility = bool ? 'visible' : 'hidden';
}
