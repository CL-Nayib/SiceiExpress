const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Lista de alumnos en memoria (hardcoded)
let alumnos = [
   { id: 1, nombre: 'Emanuel Bagundo', matricula: '20004560' },
   { id: 2, nombre: 'Gabriel Castul', matricula: '17003622' },
];

// Endpoint para obtener la lista de alumnos
app.get('/alumnos', (req, res) => {
   res.json(alumnos);
});

// Endpoint para crear un nuevo alumno
app.post('/alumnos', (req, res) => {
   const nuevoAlumno = req.body;
   alumnos.push(nuevoAlumno);
   res.json({ mensaje: 'Alumno creado correctamente', alumno: nuevoAlumno });
});

// Endpoint para editar un alumno
app.put('/alumnos/:id', (req, res) => {
   const alumnoId = parseInt(req.params.id);
   const alumnoActualizado = req.body;

   alumnos = alumnos.map((alumno) => {
      if (alumno.id === alumnoId) {
         return { ...alumno, ...alumnoActualizado };
      }
      return alumno;
   });

   res.json({ mensaje: 'Alumno actualizado correctamente', alumno: alumnoActualizado });
});

// Endpoint para eliminar un alumno
app.delete('/alumnos/:id', (req, res) => {
   const alumnoId = parseInt(req.params.id);

   alumnos = alumnos.filter((alumno) => alumno.id !== alumnoId);

   res.json({ mensaje: 'Alumno eliminado correctamente', id: alumnoId });
});

// Inicia el servidor
app.listen(PORT, () => {
   console.log(`Servidor SICEI API corriendo en http://localhost:${PORT}`);
});
