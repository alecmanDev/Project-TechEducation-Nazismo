const handleSubmit = (event) => {

  const name = document.querySelector('input[name=usuario_name]').value;
  const email = document.querySelector('input[name=usuario_email]').value;
  const number = document.querySelector('input[name=usuario_number]').value;
  const classroom = document.querySelector('input[name=usuario_class]').value;
  const nome = document.querySelector('input[name=nome]').value;
  const comentario = document.querySelector('input[name=comentario]').value;

  fetch('https://api.sheetmonkey.io/form/p7C1AWnhZj1EH8awnJU5Va', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({ name, email, number, classroom, nome, comentario }),
  });
}

document.querySelector('form').addEventListener('submit', handleSubmit)