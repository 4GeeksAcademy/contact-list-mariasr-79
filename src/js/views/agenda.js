import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const Agenda = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          {store.contacto.map((item) => (
            <div className="card mb-3" key={item.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="mb-1">
                      <strong>Teléfono:</strong> {item.phone}
                    </p>
                    <p className="mb-1">
                      <strong>Email:</strong> {item.email}
                    </p>
                    <p className="mb-0">
                      <strong>Dirección:</strong> {item.address}
                    </p>
                  </div>
                  <div className="d-flex">
                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => actions.eliminarContacto(item.id)}
                    >
                      Borrar
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        actions.saveContact(item);
                        navigate("/editar");
                      }}
                    >
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
