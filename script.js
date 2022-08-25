const btn = document.querySelector(".btn");
const myInput = document.getElementById("myInput");
const box = document.querySelector(".box");

var idNum = 1;

btn.addEventListener("click", () => {
  var inputValue = myInput.value;
  // console.log(inputValue);
  var data = ` 
            <div class="content">
              <label for=""> ${inputValue}</label>
              <div class="btns">
                <button class="edit" onclick="editText(this.id)" id="edit${idNum}">edit</button>
                <button class="delete" onclick="getBox(this.id)" id="${idNum}">delete</button>
              </div>
            </div>
            `;
  box.insertAdjacentHTML("beforeend", data);

  myInput.value = "";

  idNum = idNum + 1;
});

function getBox(id) {
  // alert(id);
  var realId = id - 1;
  const content = document.querySelectorAll(".content");
  content[realId].style.display = "none";
}

function editText(id) {
  // alert(id.slice(4));
  var realClass = parseInt(id.slice(4)) - 1;
  //   alert(realClass);
  const content = document.querySelectorAll(".content");
  myInput.value = content[realClass].firstElementChild.innerText;
}
