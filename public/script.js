const shortenBtn = document.getElementById("shorten-btn");
const longUrl = document.getElementById("long-url");

shortenBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const requestBody = { url: longUrl.value };
  fetch("https://subshort.onrender.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      const shortUrl = data.shortURL.shortURL;
      document.getElementById(
        "short-url"
      ).innerHTML = `https://subshort.onrender.com/${shortUrl}`;
      document
        .getElementById("short-url")
        .setAttribute("href", `https://subshort.onrender.com/${shortUrl}`);
    })
    .catch((error) => console.error(error));
});
