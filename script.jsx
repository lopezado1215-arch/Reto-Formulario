const { useState } = React;

function Formulario() {
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.id]: e.target.value,
        });
    }
        
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos eviados:', datos);
        alert(`Formulario enviado. Gracias, ${datos.nombre}.`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="formulario">
                <h2>Formulario</h2>
                <div className="group-nombre" >
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={datos.nombre}
                        onChange={handleChange} />
                </div>
                <div className="group-email">
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="text"
                    id="email"
                    value={datos.email}
                    onChange={handleChange} 
                    />
                </div>
                <div className="group-mensaje">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea 
                        name="mensaje" 
                        id="mensaje" 
                        value={datos.mensaje} onChange={handleChange}>
                    </textarea>
                    <button type="submit" className="boton">
                        Enviar
                    </button>
                </div>
            </div>
        </form>
    )  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Formulario />);