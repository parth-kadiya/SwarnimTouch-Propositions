const form = document.getElementById("quiz-form");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const nextBtn = document.getElementById("nextBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const checkboxes = document.querySelectorAll(
    'input[name="challenge"]:checked'
  );
  const resultContainer = document.getElementById("result");
  const selectedList = document.getElementById("selected-options");

  if (checkboxes.length === 0) {
    popup.style.display = "flex";
    return;
  }

  selectedList.innerHTML = "";
  checkboxes.forEach((cb) => {
    const li = document.createElement("li");
    li.textContent = cb.value;
    selectedList.appendChild(li);
  });

  resultContainer.style.display = "block";
  resultContainer.scrollIntoView({ behavior: "smooth" });

  nextBtn.style.display = "inline-block";
});

closePopup.addEventListener("click", function () {
  popup.style.display = "none";
});

document.getElementById("nextBtn").addEventListener("click", function () {
  window.location.href = "table.html";
});
