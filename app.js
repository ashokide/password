document.getElementById('gen-btn').addEventListener('click', () => {
  let pass = '';
  const length = document.getElementById('pass-input').value;
  const char =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz' +
    '1234567890' +
    '!@#$%^&*';

  for (let i = 1; i <= length; i++) {
    const value = Math.random() * char.length;
    pass += char.charAt(value);
  }

  if (pass !== '') {
    document.getElementById('password').innerHTML =
      'Your Password is : ' + '<br/><br/>' +pass;
    document.getElementById('password').style.color = 'green';
    document.getElementById('password').style.fontSize = '20px';
  } else {
    document.getElementById('password').innerHTML = 'Choose Length !!!';
    document.getElementById('password').style.color = 'red';
    document.getElementById('password').style.fontSize = '20px';
  }
});
