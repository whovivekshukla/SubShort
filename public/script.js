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
      document.getElementById("error").innerHTML = ``;
      document.getElementById(
        "short-url"
      ).innerHTML = `Short URL: <a href="https://subshort.onrender.com/${shortUrl}" target="_blank" id="short-url">https://subshort.onrender.com/${shortUrl}</a>`;
    })
    .catch((error) => {
      document.getElementById("short-url").innerHTML = ``;
      document.getElementById("error").innerHTML = `Invalid URL.`;
    });
});
