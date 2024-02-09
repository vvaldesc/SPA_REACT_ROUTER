import { useNavigate ,useParams } from "react-router-dom";

function UserPage({ dataUser }) {
  console.log(dataUser);
  const { id } = useParams();
  const navigate = useNavigate();

  // Aquí puedes obtener la imagen del usuario utilizando el ID

  const userInfo = dataUser.getUser(parseInt(id));

  const handleDelete = () => {
    // Lógica para borrar el usuario
  };

  const handleBack = () => {
    // Lógica para volver a la página anterior
    navigate("/");
  };

  const handleViewInfo = () => {
    // Lógica para ver la información del usuario

    return (
      <>
        {userInfo && (
          <>
            <p>{userInfo.first}</p>
            <p>{userInfo.last}</p>
          </>
        )}
      </>
    );
  };

  return (
    <div>
      <img src={userInfo.image} alt="User" />

      <button className="btn btn-danger" onClick={handleBack}>
        Borrar
      </button>

      {userInfo && (
        <button className="btn btn-primary" onClick={handleViewInfo}>
          Ver información
        </button>
      )}

      <button className="btn btn-primary" onClick={handleBack}>
        Volver
      </button>
    </div>
  );
}

export default UserPage;
