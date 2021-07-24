export default function formatDate(date) {
  const dataFormat = new Date(date)
    .toLocaleDateString('pt-BR')
    .split('/')
    .reverse()
    .join('-');

  return dataFormat;
}
