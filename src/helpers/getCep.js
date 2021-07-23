export default async function getCep(event) {
  const cepValue = event.target.value;
  let cep = false;
  if (cepValue && cepValue.length === 8) {
    const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
    const json = await response.json();

    if (json) {
      cep = {
        cep: json.cep,
        publicPace: json.logradouro,
        city: json.localidade,
        state: json.uf,
      };
    }
  }

  return cep;
}
