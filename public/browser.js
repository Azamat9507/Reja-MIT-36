
console.log("Fronted js ishga tushdi");

function itemTemplate(item) {
    return `<li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content justify-content-between">
<span class="item-text">${item.reja}</span>
<div>
   <button data-id="${item._id}"
     class="edit-me btn btn-secondary btn-sm mr-1" style="border-radius: 20px">
       Change
   </button>
   <button data-id="${item._id}" id="clean-all" class="btn btn-danger" style="border-radius: 20px">
       Clear all
   </button>
</div>
</li>`
}
let createField = document.getElementById("create-field");

document
.getElementById("create-form")
.addEventListener("submit", function(e) {
    e.preventDefault();


    axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
        document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos qaytadan harakat qiling!");
    });
});
document.addEventListener("click", function (e) {
    // delete operation
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Aniq ochirmoqchimisiz?")) {
         axios
            .post("/delete-item", { id: e.target.getAttribute("data-id") })
            .then((respose) => {
                console.log(respose.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("Iltimos qaytadan harakat qiling");
            });
        }
    }


// edit operation
if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
        "O'zgartirish kiriting",
         e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
    axios
        .post("/edit-item", {
        id: e.target.getAttribute("data-id"),
            new_input: userInput,
            })
        .then((response) => {
            console.log(response.data);
            e.target.parentElement.parentElement.querySelector(
                ".item-text"
            ).innerHTML = userInput;
        })
        .catch((err) => {
            console.log("Iltimos qaytaadan harakat qiling!");
        });
    }
  }
});
// Delete all operation
document.getElementById("clean-all").addEventListener("click", function () {
    axios.post("delete-all", {delete_all: true }).then(respose => {
        alert(respose.data.state);
        document.location.reload();
    })
})