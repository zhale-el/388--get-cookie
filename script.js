const setCookieBtn = document.querySelector("button");

setCookieBtn.addEventListener("click", () => {
  const now = new Date();

  let expiresDay = now.setTime(now.getTime() + 2 * 24 * 60 * 60 * 1000);
  console.log(now);
  document.cookie = `username=zhale;path=/;expires=${now}`;
});
