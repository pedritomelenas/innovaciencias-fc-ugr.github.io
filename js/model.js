var actividades = [
    {
        nombre: "GRUPO 9: Presentación de la actividad del grupo de Proyectos Interdisciplinares",
        fecha: "2023-02-01",
        horaInicio: "12:00",
        horaFin: "13:00",
        lugar: "Seminario 2 de Matemáticas",
        descripcion: "",
    },

    {
        nombre: "GENERAL: Reunión inicial del Equipo",
        fecha: "2023-02-06",
        horaInicio: "11:00",
        horaFin: "12:00",
        lugar: "Aula B01",
        descripcion: ""
    },

    {
        nombre: "GRUPO 8: ¿Evaluamos lo que realmente importa? Diseño e implementación de evaluación auténtica en la enseñanza de Ciencia e Ingeniería",
        ponente: "Prof. María Romero González (Universidad de Queen Mary de Londres)",
        fecha: "2023-02-16",
        horaInicio: "12:00",
        horaFin: "13:30",
        lugar: "Sala de Audiovisuales",
        descripcion: `La evaluación auténtica ofrece a los estudiantes oportunidades para aprender a través de experiencias relevantes a la 
            futura vida profesional proporcionando un espacio para la práctica de competencias necesarias para los graduandos. En 
            las áreas de Ciencia e Ingeniería, la evaluación autentica permite la evaluación de habilidades cognitivas de orden 
            superior con las que el estudiante debe construir conocimiento en un marco que requiere ejercer el juicio evaluativo. 
            En esta charla exploraremos las ventajas y barreras del uso de evaluación autentica en la enseñanza de Ciencia e 
            Ingeniería. Si bien la creación y la gestión de las tareas de evaluación auténticas pueden requerir mucho tiempo y 
            recursos, veremos como diseñar e implementar la evaluación autentica a través de un estudio de caso en Ciencia y uno 
            en Ingeniería.  Por último, examinaremos los beneficios en términos de mejora de aprendizaje y desarrollo de 
            empleabilidad, investigación y desarrollo personal de los estudiantes y la necesidad de enfocar la evaluación de 
            conocimiento en educación superior en lo que realmente es relevante para el futuro de los graduandos.`
    },

    {
        nombre: "GENERAL: Propuestas sobre docencia y su calidad en la UGR",
        ponente: "Pedro Mercado Pacheco, ex-vicerrector de Política Institucional y Planificación",
        fecha: "2023-02-16",
        horaInicio: "17:00",
        horaFin: "18:00",
        lugar: "Aula B01",
        descripcion: `En el actual marco de candidaturas a Rector, los candidatos están confeccionando el programa electoral con las propuestas 
            de diferentes sectores. Es interesante que los componentes del equipo Innova Ciencias compartan sus inquietudes, propuestas u opiniones 
            desde nuestras Facultades y Escuelas para mejorar el futuro de la Universidad.`
    },

    {
        nombre: "GRUPO 9: Innovación docente interdisciplinar a través del patrimonio histórico-artístico y, porqué no, divulgación.",
        ponente: " Prof. José Juan Castro Torres (Departamento de Óptica, UGR)",
        fecha: "2023-02-23",
        horaInicio: "12:00",
        horaFin: "13:30",
        lugar: "Aula A11",
        descripcion: `En esta charla se hablará de un proyecto de innovación docente de carácter interdisciplinar (PID 13-38 y su renovación, 15-39), 
            ya finalizado, en el que se unen la fotografía estereoscópica (a través del Grado en Óptica y Optometría) y el patrimonio 
            histórico-artístico (a través de la Arquitectura, la Historia del Arte, la Historia del Derecho y las Bellas Artes). En este PID 
            alumnos de diversos grados de la Universidad de Granada llevaron a cabo un trabajo colaborativo mediante la formación de grupos 
            interdisciplinares estudiando y visitando un edificio o conjunto histórico-artístico de la ciudad de Granada, abordándolo desde 
            diferentes disciplinas y usando la fotografía estereoscópica como nexo de unión entre dicho patrimonio y las distintas  disciplinas. 
            También se mostrarán resultados de otras colaboraciones en las que se usa la fotografía estereoscópica para divulgar ciencia, pero 
            también patrimonio. Para más información del Proyecto de Innovación Docente (libro sobre el proyecto que contiene anaglifos de Granada):
            <a href="http://hdl.handle.net/10481/53864" target="_blank">http://hdl.handle.net/10481/53864</a>`
    },

    {
        nombre: "GRUPO 2: Experiencias de aprendizaje colaborativo internacional en el contexto de ARQUS",
        ponente: "Pedro Real Luna y Salvador Morales Ruano",
        fecha: "2023-04-18",
        horaInicio: "11:00",
        horaFin: "12:30",
        lugar: "Aula C11",
        descripcion: "Ponencia sobre experiencias de aprendizaje colaborativo internacional, y posterior debate"
    },

    {
        nombre: "GENERAL: Sesión Markdown",
        ponente: "Pedro A. García Sánchez, Francisco Gómez",
        fecha: "2023-05-04",
        horaInicio: "12:00",
        horaFin: "14:00",
        lugar: "Aula-Inf 007",
        descripcion: `Introducción a markdown. Algunos ejemplos de conversión con pandoc. Transparencias con marp. Cómo usar markdown en Prado y en GitHub.
        
        Podéis llevar vuestro portátil, pero no es necesario. Os recomiendo instalar vscode (gratuito microsoft).`
    },

    {
        nombre: "GRUPO 8: Evaluación del desempeño docente del profesorado mediante el Docentia-UGR",
        ponente: "Teresa Pozo, David Guerrero y Diego Pablo Ruiz. UCIP",
        fecha: "2023-06-06",
        horaInicio: "12:30",
        horaFin: "13:30",
        lugar: "Aula A12",
        descripcion: `En la charla se presentará el modelo Docentia-UGR y la aplicación informática puesta en marcha por la universidad para la evaluación del profesorado. Se realizará con un enfoque práctico, presentando el modelo vigente, qué tipo de méritos se valoran, y cómo se utiliza la aplicación informática.`
    },

    {
        nombre: "GRUPO 7: Consejos y experiencia en la aplicación de un escape room en la docencia universitaria",
        ponente: "Jose Luis Gómez Urquiza",
        fecha: "2023-06-13",
        horaInicio: "15:00",
        horaFin: "16:00",
        lugar: "Online: https://meet.google.com/rvi-oocm-cny",
        descripcion: `Se expondrán experiencias y aprendizajes tras varios años realizando escape rooms como método de evaluación docente en la universidad así como las necesidades de material y planificación.`
    },

    {
        nombre: "GRUPO 3: Experiencias con Talleres y H5P en PRADO",
        ponente: "Sonia Rodríguez, Pedro A. García, Eloisa Ramos y María Hernández",
        fecha: "2023-06-26",
        horaInicio: "10:00",
        horaFin: "11:15",
        lugar: "Aula A23",
        salaOnline: "https://meet.google.com/vbp-zbzf-byc",
        descripcion: `Presentación de una gran variedad de aplicaciones H5P y Talleres en PRADO en el ámbito docente. Ventajas y desventajas de dichas aplicaciones según el campo de conocimiento donde se aplican.`
    },

    {
        nombre: "GENERAL: Introducción a la programación y diseño web",
        ponente: "Juan Antonio Villegas",
        fecha: "2023-06-26",
        horaInicio: "11:30",
        horaFin: "12:15",
        lugar: "Aula A25",
        salaOnline: "https://meet.google.com/vbp-zbzf-byc",
        descripcion: `Breve introducción a los principales conceptos, analogías y diferencias del diseño y la programación web, con énfasis en esta última. Se hablará también sobre el desarrollo y las herramientas utilizadas en la creación de la web del grupo Innovaciencias.`
    },

    {
        nombre: "Formación Inicial: Confección de materiales accesibles, perteneciente al taller de Acción Tutorial y Metodología accesible a Estudiantes universitarios con discapacidad y otras Necesidades Específicas de Apoyo Educativo (NEAE).",
        ponente: "M. Asunción Arrufat Pérez de Zafra, Departamento de Traducción e Interpretación y anteriormente Personal de Apoyo Técnico a la Investigación del Secretariado para la Inclusión del Vicerrectorado de Igualdad, Inclusión y Sostenibilidad.",
        fecha: "2024-03-22",
        horaInicio: "09:00",
        horaFin: "12:00",
        lugar: "Aula Info-09",
        descripcion:"Acercamiento a los conceptos básicos sobre accesibilidad digital de manera práctica, aprendiendo a elaborar documentos de texto y presentaciones de diapositivas accesibles para todos los estudiantes.  "
    },

    {
        nombre: "Formación Inicial: Cómo evitar el plagio en los trabajos de los alumnos, perteneciente al taller de Metodología y Planificación Docente.",
        ponente: "Esther Viseras Alarcón, Departamento de Genética",
        fecha: "2024-04-09",
        horaInicio: "09:00",
        horaFin: "12:00",
        lugar: "Aula Info-09",
        descripcion: "Concepto de plagio, características y modo de utilización de la herramienta de control de plagio Turnitin a través de PRADO. Simulación de envío de documentos plagiados para practicar con el programa."
    },

    {
        nombre: "Formación Inicial: Varias experiencias en la universidad. Mesa redonda, perteneciente al taller de Acción Tutorial y Metodología accesible a Estudiantes universitarios con discapacidad y otras Necesidades Específicas de Apoyo Educativo (NEAE).",
        ponente: "Silvia Muñoz Fernández, trabajadora social del Servicio de Asistencia Estudiantil del Vicerrectorado de Estudiantes y varios estudiantes con NEAE",
        fecha: "2024-04-12",
        horaInicio: "09:30",
        horaFin: "12:00",
        lugar: "Aula B1",
        descripcion: "Tras una exposición del procedimiento de atención en la UGR al estudiantado que presenta NEAE, una representación de estudiantes de nuestra universidad con distintos tipos de discapacidad y necesidades específicas contarán en primera persona su experiencia, sus dificultades, la percepción que tienen sobre la actitud del profesorado y la forma en que necesitarían ser tratados por el mismo para facilitar su adaptación."
    },

    {
        nombre: "Formación Inicial: Procedimiento de atención a los estudiantes con NEAE en los Grados, perteneciente al taller de Acción Tutorial y Metodología accesible a Estudiantes universitarios con discapacidad y otras Necesidades Específicas de Apoyo Educativo (NEAE).",
        ponente: "Mohamed Abdelaziz Mohamed, Departamento de Genética, coordinador NEAE del grado en Biología y miembro de la Comisión de Inclusión de la Facultad de Ciencias y tutor de varios estudiantes con NEAE.",
        fecha: "2024-04-15",
        horaInicio: "12:00",
        horaFin: "14:00",
        lugar: "Aula A-20",
        descripcion: "Utilizando su experiencia como coordinador y tutor NEAE en el Grado de Biología, el ponente nos explicará los protocolos seguidos en el centro de estudio para asegurar la atención correcta a los estudiantes con discapacidad y NEAE."
    },

    {
        nombre: "Formación Inicial: La acción tutorial en la universidad; diseño de una estrategia de orientación académica y profesional para los estudiantes del grado en Biología, perteneciente al taller de Acción Tutorial y Metodología accesible a Estudiantes universitarios con discapacidad y otras Necesidades Específicas de Apoyo Educativo (NEAE).",
        ponente: "Cristina Trenzado Romero, Departamento de Biología Celular y responsable del Plan de Acción Tutorial del Grado de Biología.",
        fecha: "2023-04-17",
        horaInicio: "12:00",
        horaFin: "14:00",
        lugar: "Aula A-10",
        descripcion: "Objetivos planteados y metodología utilizada en el Plan de Acción Tutorial de Biología: Para la formación a estudiantes, programación de actividades presenciales adaptadas a cada curso con el fin de facilitar el acceso a las fuentes de información con las que cuenta la Universidad de Granada. Diseño de una herramienta digital, de aplicación práctica, que favorezca los canales de comunicación entre profesorado y estudiantes permitiendo al estudiante hacer una selección personalizada de contenidos e incorporando herramientas que fomenten su aprendizaje y desarrollo profesional."
    },
    {
        nombre: "Formación Inicial: Mesa redonda sobre problemas y dudas en docencia en general, perteneciente al taller de Metodología y Planificación Docente.",
        ponente: "Emilia M. Guadix Escobar, Diego P. Ruiz Padillo, Pedro García Fernández y Esther Viseras Alarcón",
        fecha: "2024-04-26",
        horaInicio: "12:00",
        horaFin: "14:00",
        lugar: "Aula de Audiovisuales",
        descripcion: "Se dedicará a que los profesores noveles puedan expresar sus dudas o comentar sus problemas en el curso de la docencia a cualquier nivel que hayan impartido hasta la fecha o las incertidumbres sobre su futura actuación docente."
    },

    {
        nombre: "Formación inicial: Planificación de materias, perteneciente al taller de Metodología y Planificación Docente.",
        ponente: "Emilia M. Guadix Escobar, Departamento de Ingeniería Química",
        fecha: "2024-04-24",
        horaInicio: "12:00",
        horaFin: "14:0",
        lugar: "Aula A-10",
        descripcion: "Se tratará de responder a las preguntas: ¿Qué y dónde enseñar?; ¿a quién, cómo y cuándo enseñar?; ¿qué, cómo y cuándo evaluar?, teniendo en cuenta el contexto de la asignatura, sus descriptores y competencias. Diseño de temas y temporalización. Importancia de la acción tutorial en el proceso de aprendizaje."
    },

    {
        nombre: "Formación Inicial: Metodologías activas, perteneciente al taller de Metodología y Planificación Docente.",
        ponente: "Emilia M. Guadix Escobar, Departamento de Ingeniería Química",
        fecha: "2024-04-30",
        horaInicio: "12:00",
        horaFin: "14:30",
        lugar: "Aula Aula de Audiovisuales",
        descripcion: "En las metodologías activas se concibe el aprendizaje como un proceso constructivo e integrador donde el alumno participa y no es un mero receptor de información. Para ello, el profesor puede utilizar distintas estrategias como desarrollo de un proyecto, estudio de casos, resolución de problemas, cambio de escenarios, etc."
    },

    {
        nombre: "Formación Inicial: Herramientas y técnicas de evaluación de materias basadas en competencias, perteneciente al taller de Metodología y Planificación Docente.",
        ponente: "Diego P. Ruiz Padillo, Departamento de Física Aplicada",
        fecha: "2024-05-03",
        horaInicio: "12:00",
        horaFin: "14:00",
        lugar: "Aula de Audiovisuales",
        descripcion: "La evaluación de las materias debe hacerse de forma que esté alineada con las metodologías docentes empleadas y las competencias de las materias. Se busca definir un marco global sobre cómo diseñar una evaluación sistemática de las competencias de las materias, además de analizar y proponer varias técnicas e instrumentos de evaluación, con especial énfasis en las rúbricas."
    },

    {
        nombre: "Formación Inicial: Ética de la profesión docente, perteneciente al taller de Metodología y Planificación Docente.",
        ponente: "Emilia M. Guadix Escobar, Departamento de Ingeniería Química",
        fecha: "2024-05-02",
        horaInicio: "11:00",
        horaFin: "14:00",
        lugar: "Aula de Audiovisuales",
        descripcion: "Se debatirá sobre el significado de comportamiento ético para un docente, partiendo de los conceptos ya establecidos de moral, ética y conciencia moral. Aspectos claves y comportamientos asociados a la ética en la profesión docente, tanto en la transmisión de conocimientos como en la evaluación del estudiantado en diferentes metodologías y escenarios."
    },

    {
        nombre: "Formación Inicial: Innovación y curriculum docente en Ciencias y Técnicas, perteneciente al taller de Metodología y Planificación Docente.",
        ponente: "Diego P. Ruiz Padillo, Departamento de Física Aplicada",
        fecha: "2024-05-09",
        horaInicio: "12:00",
        horaFin: "14:30",
        lugar: "Aula de Audiovisuales",
        descripcion: "Se revisarán las diversas convocatorias de innovación docente que la UGR pone en marcha y las oportunidades que se ofrecen de generar méritos que puedan mejorar el curriculum y la formación docente del profesorado. Se proporcionarán consejos sobre cómo preparar una propuesta de innovación docente."
    },

    {
        nombre: "Formación Inicial: De la clase magistral a la clase invertida: cómo cuándo y por qué, perteneciente al taller de Herramientas de Gestión del Aula.",
        ponente: "Esther Viseras Alarcón, Departamento de Genética",
        fecha: "2024-05-14",
        horaInicio: "09:00",
        horaFin: "12:00",
        lugar: "Aula de Audiovisuales",
        descripcion: "La clase magistral: abordaje, preparación y desarrollo. Manejo de clases numerosas: estrategias generales, el clima de clase, trato a los estudiantes. Alternativas a la clase magistral: técnicas, ventajas e inconvenientes. Retroalimentación: tipos y funciones de las preguntas en clase."
    },

    {
        nombre: "Formación Inicial: Evaluación de la docencia en el profesorado universitario, perteneciente al taller de Metodología y Planificación Docente.",
        ponente: "Diego P. Ruiz Padillo, Departamento de Física Aplicada",
        fecha: "2024-05-16",
        horaInicio: "12:00",
        horaFin: "14:30",
        lugar: "Aula de Audiovisuales",
        descripcion: "Variables que se valoran dentro del programa Docentia de la UGR, y evidencias en las que se sustenta la evaluación de la calidad de la docencia del profesorado. Estudio y reflexión sobre el proceso de acreditación de cuerpos docentes del profesorado y la cumplimentación de méritos necesarios para ello."
    }


    /*
    // Plantilla para proximas actividades
    // No olvidar poner la coma despues de la última actividad publicada
    {
        nombre: "GRUPO X: <nombre>",
        ponente: "",
        fecha: "yyyy-mm-dd",
        horaInicio: "HH:MM",
        horaFin: "HH:MM",
        lugar: "Aula 999",
        descripcion: "<descripcion>"
    }

    */

]

export { actividades }
