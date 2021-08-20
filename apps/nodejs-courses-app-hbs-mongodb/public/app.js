const toCurrency = (price) =>
  new Intl.NumberFormat("ua-UA", {
    currency: "uah",
    style: "currency",
  }).format(price);

const toDate = (date) =>
  new Intl.DateTimeFormat("ua-UA", {
    day: "2-digit",
    month: "long",
    yaer: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(date));

document.querySelectorAll(".price").forEach((node) => {
  node.textContent = toCurrency(node.textContent);
});

document.querySelectorAll(".date").forEach((node) => {
  node.textContent = toDate(node.textContent);
});

const $cart = document.querySelector("#cart");
if ($cart) {
  $cart.addEventListener("click", (event) => {
    if (event.target.classList.contains("js-remove")) {
      const id = event.target.dataset.id;
      const csrf = event.target.dataset.csrf;
      fetch("/cart/remove/" + id, {
        method: "delete",
        headers: { "X-XSRF-TOKEN": csrf },
      })
        .then((res) => res.json())
        .then((cart) => {
          console.log("cart", cart);
          if (cart.courses.length) {
            const html = cart.courses
              .map((item) => {
                return `
                <tr>
                  <td>${item.title}</td>
                  <td>${item.count}</td>
                  <td>
                    <button class="btn btn-small js-remove" data-id="${item.id}" data-csrf="${csrf}">Видалити</button>
                  </td>
                </tr>
              `;
              })
              .join("");
            $cart.querySelector("tbody").innerHTML = html;
            $cart.querySelector(".price").textContent = toCurrency(cart.price);
          } else {
            $cart.innerHTML = "<p>Кошик пустий</p>";
          }
        });
    }
  });
}

M.Tabs.init(document.querySelectorAll(".tabs"));
