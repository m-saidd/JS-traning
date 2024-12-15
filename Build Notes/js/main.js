    let button = document.getElementById("button");
    let container = document.getElementById("container");

    button.addEventListener("click", () => {
      let btn = document.createElement("div");
      btn.classList.add("btn");

      let textarea = document.createElement("textarea");
      btn.appendChild(textarea);

      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
    let img = document.createElement("img");
    img.src = "../images/delete.png"
    deleteBtn.appendChild(img);
    img.style.marginLeft = "13px";

      deleteBtn.addEventListener("click", () => {
        btn.remove();
      });

      btn.appendChild(deleteBtn);

      container.appendChild(btn);
    });