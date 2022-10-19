function changeStatus(answer){
console.log(answer.value);
if(answer.value == 1 ){
    document.getElementById("yes_output").classList.remove("showhide")
}
else{
    document.getElementById("yes_output").classList.add("showhide")
};

if(answer.value == 2 ){
    document.getElementById("yes_output").classList.add("showhide")
}
else{
    document.getElementById("pull").classList.add("showhide")
};

if(answer.value == 3 ){
    document.getElementById("pull").classList.remove("showhide")
    document.getElementById("push").classList.remove("showhide")
}
else{
    document.getElementById("pull").classList.add("showhide")
    document.getElementById("push").classList.add("showhide")
}


}

/*validating the form*/
const myform = document.getElementById('myform');
const pension_code = document.getElementById('pension_code');
const lists = document.getElementById('lists');
const employee_code = document.getElementById('employee_code');
const upload_file = document.getElementById('upload-file');


function reset(input) {
  const input_wrap  = input.parentElement;
  const small = input_wrap .querySelector('small');
  small.innerText = '';
  input_wrap .classList.remove('error');
}

myform.addEventListener('submit', (e) => {
  checkInputs(e);
});

function checkInputs(e) {
  const pension_code = pension_code.value.trim();
  if (pension_code === '') {
    setErrorFor(pension_code, ' Please fill out this field');
    e.preventDefault();
  } else {
    setSuccessFor(pension_code);
  }
}

if (lists === '') {
    setErrorFor(lists, ' Please fill out this field');
    e.preventDefault();
  } else {
    setSuccessFor(lists);
  }

  if (employee_code === '') {
    setErrorFor(employee_code, ' Please fill out this field');
    e.preventDefault();
  } else {
    setSuccessFor(employee_code);
  }

  if (upload_file === '') {
    setErrorFor(upload_file, ' upload pension file');
    e.preventDefault();
  } else {
    setSuccessFor(upload_file);
  }



function setErrorFor(input, message) {
    const input_wrap = input.input_wrap;
  const small = input_wrap.querySelector('small');

  small.innerText = message;

  input_wrap.classList.remove('error');
}

function setSuccessFor(input) {
  const input_wrap = input.parentElement;
  input_wrap.classList.add('success');
  input_wrap.classList.remove('error');
}

// email validating


pension_code.addEventListener('keyup', function () {
  reset(pension_code);
});
lists.addEventListener('keyup', function () {
    reset(lists);
  });
  employee_code.addEventListener('keyup', function () {
    reset(employee_code);
  });
  upload_file.addEventListener('keyup', function () {
    reset(upload_file);
  });
