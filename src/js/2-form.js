const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
  
const storedForm = JSON.parse(localStorage.getItem(localStorageKey));
  
  if (storedForm) {
    form.elements.email.value = storedForm.email || "";
    form.elements.message.value = storedForm.message || "";
};

  form.addEventListener("input", () => {
    const formState = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };

    localStorage.setItem(localStorageKey, JSON.stringify(formState));
  });


  form.addEventListener("submit", (eve) => {
    eve.preventDefault();
    console.log("Data submitted:", JSON.parse(localStorage.getItem(localStorageKey)));
    form.reset();
    localStorage.removeItem(localStorageKey);
  });




