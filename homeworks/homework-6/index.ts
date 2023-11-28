const forms = document.querySelectorAll("form");
const emailField = document.querySelector("#email") as HTMLInputElement;
const titleField = document.querySelector("#title") as HTMLInputElement;
const textAreaField = document.querySelector("#text") as HTMLTextAreaElement;
const chcekBoxField = document.querySelector("#checkbox") as HTMLInputElement;

interface DataForm {
  email: string;
  title: string;
  text: string;
  checkbox: boolean;
};

const formData: DataForm = {
email: "",
title: "",
text: "",
checkbox: false 
};

function validateFormData(data: DataForm): data is DataForm {
  if(data.email && data.title && data.text && data.checkbox) {
		return true;
  } 
  else {
		return false;
	}
};

function checkFormData(data: DataForm): void {
  const { email } = data;
  const emails = ["example@gmail.com", "user@gmail.com", "admin@gmail.com"]  
  if(emails.some((e) => e === email)) {
    console.log("This email is already exists")
  }
  else{
    console.log("Posting data...")
  }
}

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {

    e.preventDefault()

    formData.email = emailField?.value ?? "";
    formData.title = titleField?.value ?? "";
    formData.text = textAreaField?.value ?? "";
    formData.checkbox = chcekBoxField?.checked ?? false

    if(validateFormData(formData)){
      checkFormData(formData)
    }
    else{
    console.log("Please, complete all fields!")
    }
  })
})



