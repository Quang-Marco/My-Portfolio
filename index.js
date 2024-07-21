document.getElementById("btn_submit").onclick = () => {
  let name = document.querySelector("#form_recommendations input").value;
  let recommendations = document.querySelector(
    "#form_recommendations textarea"
  ).value;
  let validation = true;
  let content = "";
  validation &= isNameValid(name) & isRecommendationsValid(recommendations);
  if (!validation) {
    return;
  }
  content += `
              <div class="col-lg-4 col-md-6 col-12 px-2">
                  <div class="p-4 border rounded-4">
                      <q>${recommendations}</q>
                  </div>            
              </div>
              `;
  document.querySelector("#recommendations .row").innerHTML += content;

  Toastify({
    text: "✅ your recommendation is highly appreciated!",
    duration: 3000,
    close: true,
    stopOnFocus: true, // Prevents dismissing of toast on hover
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();

  document.getElementById("form_recommendations").reset();
};
