import Campo from "../Campo/Campo";
import "./AddMembro.css";

const AddMembro = () => {
  return (
    <form action="" className="p-4">
      <h2 className="text-2xl text-blue-900 font-bold text-center mb-2">
        Adicione um novo membro
      </h2>
      <Campo
        title="Nome"
        type="text"
        placeholder="Nome do membro"
        length={64}
        required={true}
      ></Campo>
      <Campo
        title="Cargo"
        type="text"
        placeholder="Cargo na Instituição"
        length={32}
        required={true}
      ></Campo>
      <Campo
        title="CPF"
        type="text"
        placeholder="000.000.000-00"
        length={15}
        required={true}
      ></Campo>
      <Campo
        title="RG/Órgão"
        type="text"
        placeholder="00.000.000 SSP/SP"
        length={18}
        required={true}
      ></Campo>
      <Campo
        title="Email"
        type="text"
        placeholder="email_do_membro@email.com"
        length={48}
        required={true}
      ></Campo>
      <Campo
        title="CEP"
        type="text"
        placeholder="00000-000"
        length={9}
        required={true}
      ></Campo>
      <Campo
        title="Endereço"
        type="text"
        placeholder="Rua, numero, bairro"
        length={64}
        required={true}
      ></Campo>
      <Campo
        title="Cidade"
        type="text"
        placeholder="Cidade"
        length={32}
        required={true}
      ></Campo>
      <Campo
        title="Estado"
        type="text"
        placeholder="Estado"
        length={32}
        required={true}
      ></Campo>

      <input
        type="submit"
        value="Proxima Página"
        className="generic_button mt-5"
      />
    </form>
  );
};

export default AddMembro;
