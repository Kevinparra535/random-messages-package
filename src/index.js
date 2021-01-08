const messages = [
  "Hola, ¿Como estas?",
  "El arte de crear y el de destuir",
  "Hola.log()",
  "Bienvenido master",
  "No me funciona :(",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

export default { randomMsg };
