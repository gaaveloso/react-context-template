import { useContext } from "react";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContexts";

function NotFoundPage(props) {

  const context = useContext(GlobalContext)

  const {bananinha} = context;

  return (
    <div>
      <Header />
      <h1>Ops! Essa página foi levada pela Equipe Rocket!</h1>
      <h4>{bananinha}</h4>
    </div>
  );
}

export default NotFoundPage;
