// Check name
function isNameValid(name) {
  if (!name) {
    document.getElementById("name-alert").innerHTML =
      "You must fill this field!";
    return false;
  } else {
    document.getElementById("name-alert").innerHTML = "";
    return true;
  }
}

function isRecommendationsValid(recommendations) {
  if (!recommendations) {
    document.getElementById("recommendations-alert").innerHTML =
      "You must fill this field!";
    return false;
  } else {
    document.getElementById("recommendations-alert").innerHTML = "";
    return true;
  }
}
