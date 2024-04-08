import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor Express está rodando em http://localhost:${PORT}`);
});
