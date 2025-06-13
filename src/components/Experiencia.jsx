const Experiencia = () => {
    const experienciaLaboral = [
      {
        id: 1,
        empresa: "Restaurante Pimentel",
        cargo: "Mesero",
        period: "20 de abril de 2023 - 20 de mayo de 2023",
        funciones: [
          "Atención al cliente y servicio de mesa.",
        ],
      },
      {
        id: 2,
        empresa: "Ayudante de Construcción",
        cargo: "Ayudante de cargas y materiales",
        period: "2 de julio 2020 - Actualidad",
        funciones: [
          "Ayudante de cargas y materiales.",
        ],

      supervisor: "Jonathan Alberto Guarin Chávez",
        contacto: "3212959666"
      }
    ];
  
    return (
      <section className="section">
        <h2>EXPERIENCIA PROFESIONAL</h2>
        <div className="experience-list">
          {experienciaLaboral.map(exp => (
            <div key={exp.id} className="experience-item">
              <h3>{exp.company}</h3>
              <p className="position">{exp.cargo} | {exp.period}</p>
              <h4>Funciones:</h4>
              <ul>
                {exp.funciones.map((func, index) => (
                  <li key={index}>{func}</li>
                ))}
              </ul>
              <p className="supervisor"><strong>Jefe inmediato:</strong> {exp.supervisor}</p>
              <p className="contact"><strong>Contacto:</strong> {exp.contacto}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experiencia;