function handleNotifyForm(formId, noteId) {
  const form = document.getElementById(formId);
  const note = document.getElementById(noteId);
  if (!form || !note) return;

  const defaultNote = note.textContent;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value.trim();
    if (!email) return;

    note.textContent = "You're on the list. We'll email you the second the flock lands.";
    note.classList.add("success");
    form.querySelector("input").value = "";

    setTimeout(() => {
      note.textContent = defaultNote;
      note.classList.remove("success");
    }, 6000);
  });
}

handleNotifyForm("notify-form", "form-note");
handleNotifyForm("notify-form-2", "form-note-2");
