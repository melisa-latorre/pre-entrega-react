// src/componentes/layout/PieDePagina.jsx
export function PieDePagina() {
  const equipo = [
    { id: 1, nombre: "Dr. Roberto Sánchez", rol: "Director Editorial" },
    { id: 2, nombre: "Dra. Laura Gómez", rol: "Revisora Legal" },
    { id: 3, nombre: "Lic. Martín Ruiz", rol: "Atención al Cliente" }
  ];

  return (
    <footer style={estilos.footer}>
      <div style={estilos.infoEmpresa}>
        <h3>Ediciones Jurídicas</h3>
        <p>Especialistas en bibliografía legal actualizada.</p>
        <p>Av. Corrientes 1234, CABA</p>
      </div>

      <div style={estilos.seccionEquipo}>
        <h4>Nuestro Equipo</h4>
        <div style={estilos.contenedorTarjetas}>
          {equipo.map((persona) => (
            <div key={persona.id} style={estilos.tarjetaPersona}>
              <div style={estilos.avatar}></div>
              <h5>{persona.nombre}</h5>
              <p>{persona.rol}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div style={estilos.copyright}>
        <p>&copy; {new Date().getFullYear()} Ediciones Jurídicas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

const estilos = {
  footer: { backgroundColor: '#f9f9f9', borderTop: '1px solid var(--color-borde)', padding: '2rem', marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  infoEmpresa: { textAlign: 'center', marginBottom: '2rem' },
  seccionEquipo: { width: '100%', maxWidth: '800px', textAlign: 'center' },
  contenedorTarjetas: { display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' },
  tarjetaPersona: { border: '1px solid var(--color-borde)', borderRadius: '8px', padding: '1rem', width: '200px', backgroundColor: 'white', textAlign: 'center' },
  avatar: { width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--color-acento)', margin: '0 auto 10px' },
  copyright: { marginTop: '2rem', fontSize: '0.8rem', color: '#666' }
};