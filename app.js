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
    document.getElementById(
      'password'
    ).innerHTML = `<h4>Your Password is : </h4> <span>${pass}</span>`;
    document.getElementById('password').style.color = 'green';
    document.getElementById('password').style.fontSize = '16px';
  }
  if (length > 16) {
    document.getElementById('password').innerHTML =
      'Password Length should be less than 16 !!!';
    document.getElementById('password').style.color = 'red';
    document.getElementById('password').style.fontSize = '14px';
  } else if (length <= 0) {
    document.getElementById('password').innerHTML =
      'Password Length should be greater than 0 !!!';
    document.getElementById('password').style.color = 'red';
    document.getElementById('password').style.fontSize = '14px';
  }
});
