const Habilidades = () => {
    const habilidad = [
      "Trabajo en equipo",
      "Resolución de problemas",
      "Comunicación efectiva",
      "Adaptabilidad",
      "Organización",
      "Empatía",
      "Respeto",
    ];
  
    return (
      <section className="section">
        <h2>HABILIDADES</h2>
        <ul className="skills-list">
          {habilidad.map((habilidad, index) => (
            <li key={index}>{habilidad}</li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Habilidades;