function toggle() {
    var x = document.getElementById("div1");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
}

const form = document.querySelector('student.form');


form.addEventListener('submit', insertData);


function insertData(event) {
  event.preventDefault();
  const nim = document.querySelector('#nim');
  const name = document.querySelector('#name');
  const gender = document.querySelector('#gender');
  const faculty = document.querySelector('#faculty');
  const prodi = document.querySelector('#prodi');

  const td = document.createElement('td');
  td.className = 'list-item';
  td.appendChild(document.createTextNode) (`${nim.value} / ${name.value} / ${gender.value} / ${faculty.value} / ${prodi.value} | `));

  console.log (td);

  const tr = document.querySelector('#info');
  tr.appendChild(td);
}