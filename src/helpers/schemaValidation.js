import * as yup from 'yup';

const schema = yup.object().shape({
  situationClient: yup.mixed().nullable().required('Campo Obrigatório'),
  nameClientOrFantasy: yup.string().required('Campo obrigatório'),
  lastNameOrSocial: yup.string().required('Campo obrigatório'),
  cpfOfCnpj: yup
    .string()
    .required('Campo obrigatório')
    .matches(
      /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/,
      'Dado inválido',
    ),
  phone: yup.string().required('Campo obrigatório'),
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  cep: yup.string().min(8, 'Cep inválido').required('Campo obrigatório'),
  publicPace: yup.string().required('Campo obrigatório'),
  storeNumber: yup.string().required('Campo obrigatório'),
  city: yup.string().required('Campo obrigatório'),
  state: yup.string().required('Campo obrigatório'),
  storeOpeningHours: yup.string().required('Campo obrigatório'),
  dayService: yup
    .date('Campo obrigatório')
    .min(new Date(), 'Data inválida')
    .required('Campo obrigatório'),
});

export default schema;
