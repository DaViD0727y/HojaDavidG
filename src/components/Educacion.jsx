const Educacion = () => {
    const formacionAcademica = [
      {
        titulo: "Decimo y onnceavo grado",
        institucion: "Francisco de Paula Santander - Ibagué - Tolima"
      },
      {
        titulo: "basica primaria y noveno grado", 	
        institucionn: "Leónidas Rubió Villegas - Ibagué - Tolima"
      },
    ];
  
    return (
      <section className="section">
        <h2>ESTUDIOS</h2>
        <div className="education-list">
          {formacionAcademica.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="year">{edu.year}</div>
              <div className="education-details">
                <h3>{edu.titulo}</h3>
                <p>{edu.institucion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Educacion;