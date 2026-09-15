$(document).ready(function () {
  // Load items on index.html
  if (window.location.pathname.includes("index.html")) {
    $.getJSON("js/data.json", function (data) {
      function showItems(category, search) {
        let items = data.filter(item => {
          return (category === "all" || item.category === category) &&
                 (item.name.toLowerCase().includes(search.toLowerCase()));
        });

        let html = "";
        items.forEach(item => {
          html += `<div class="item">
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                    <a href="item.html?id=${item.id}">View</a>
                  </div>`;
        });

        $('#foodList').html(html || "<p>No items found.</p>");
      }

      showItems("all", "");

      $('#category').change(function () {
        showItems($(this).val(), $('#search').val());
      });

      $('#search').on("keyup", function () {
        showItems($('#category').val(), $(this).val());
      });
    });
  }

  // Show item on item.html
  if (window.location.pathname.includes("item.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get("id"));

    $.getJSON("js/data.json", function (data) {
      const item = data.find(i => i.id === id);
      if (item) {
        $('#foodDetails').html(`
          <h2>${item.name}</h2>
          <p><strong>Category:</strong> ${item.category}</p>
          <p><strong>Price:</strong> ${item.price}</p>
          <p>${item.description}</p>
        `);
      } else {
        $('#foodDetails').html("<p>Item not found.</p>");
      }
    });
  }
});
