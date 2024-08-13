import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Agenda = () => {
    const {store, action} = useContext(Context);


    console.log("Estos son mis contactos",store.contacto);


    return (
        <h1>Esta es mi agenda</h1>
    );
};

export default Agenda;