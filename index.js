const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//crear representante

app.post("/representantes", async (req, res) => {
    try {
        let data = req.body;
        console.log(data)
        const newRepresentante = await pool.query(
          "INSERT INTO representantes (cedula,nombre,apellido,telefono,correo) VALUES($1,$2,$3,$4,$5) ",
          [data.cedula,data.nombre,data.apellido,data.telefono,data.correo]);
          res.statusCode = 201
          res.json(true);
         
        
          
  
    } catch (err) {
      res.statusCode = 400
      res.json(false);
      console.error(err.message);


   
    }
  });

//get all representantes

app.get("/representantes", async (req, res) => {
  try {
    const allRepresentantes = await pool.query("SELECT * FROM representantes");
    res.json(allRepresentantes.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a representante

app.get("/representantes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const representantes = await pool.query("SELECT * FROM representantes WHERE cedula = $1", [
      id
    ]);

    res.json(representantes.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a representante

app.put("/representantes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let data = req.body;
    const updateRepresentante = await pool.query(
      "UPDATE representantes SET nombre = $1 WHERE cedula = $2",
      [data.nombre , id]
    );

    res.json(true);
  } catch (err) {
    res.json(false)
    console.error(err.message);
  }
});

//delete a representante

app.delete("/representantes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRepresentantes = await pool.query("DELETE FROM representantes WHERE cedula = $1", [
      id
    ]);
    res.json(true);
  } catch (err) {
    res.json(false);
    console.log(err.message);
  }
});


///////////////ALUMNOS 

//crear alumnos
app.post("/alumnos", async (req, res) => {
  try {
      let data = req.body;
      console.log(data)
      const newAlumno = await pool.query(
        "INSERT INTO alumnos (nombre,grado,seccion) VALUES($1,$2,$3) ",
        [data.nombre,data.grado,data.seccion]);
        res.statusCode = 201
        res.json(true);
       
      
        

  } catch (err) {
    res.statusCode = 400
    res.json(false);
    console.error(err.message);


 
  }
});

//get all alumnos

app.get("/alumnos", async (req, res) => {
  try {
    const allAlumnos = await pool.query("SELECT * FROM alumnos");
    res.json(allAlumnos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a alumno

app.get("/alumnos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const alumnos = await pool.query("SELECT * FROM alumnos WHERE alumno_id = $1", [
      id
    ]);

    res.json(alumnos.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a alumnos

app.put("/alumnos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let data = req.body;
    const updateAlumno = await pool.query(
      "UPDATE alumnos SET nombre = $1, grado = $2, seccion = $3 WHERE alumno_id = $4",
      [data.nombre, data.grado, data.seccion, id]
    );

    res.json(true);
  } catch (err) {
    res.json(false)
    console.error(err.message);
  }
});

app.delete("/alumnos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAlumnos = await pool.query("DELETE FROM alumnos WHERE alumno_id = $1", [
      id
    ]);
    res.json(true);
  } catch (err) {
    res.json(false);
    console.log(err.message);
  }
});

///////////////FAMILIARES

//crear familiares AGREGAR EL REPRESENTANTE ID
app.post("/familiares", async (req, res) => {
  try {
      let data = req.body;
      console.log(data)
      const newFamiliar = await pool.query(
        "INSERT INTO familiares (cedula, nombre) VALUES($1,$2) ",
        [data.cedula, data.nombre]);
        res.statusCode = 201
        res.json(true);
       
      
        

  } catch (err) {
    res.statusCode = 400
    res.json(false);
    console.error(err.message);


 
  }
});

//get all familiares

app.get("/familiares", async (req, res) => {
  try {
    const allFamiliares = await pool.query("SELECT * FROM familiares");
    res.json(allFamiliares.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a familiar

app.get("/familiares/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const familiares = await pool.query("SELECT * FROM familiares WHERE cedula = $1", [
      id
    ]);

    res.json(familiares.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


//update familiares

app.put("/familiares/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let data = req.body;
    const updateFamiliar = await pool.query(
      "UPDATE familiares SET cedula = $1, nombre = $2 WHERE cedula = $3",
      [data.cedula, data.nombre, id]
    );

    res.json(true);
  } catch (err) {
    res.json(false)
    console.error(err.message);
  }
});


//delete familiares
app.delete("/familiares/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFamiliar = await pool.query("DELETE FROM familiares WHERE cedula = $1", [
      id
    ]);
    res.json(true);
  } catch (err) {
    res.json(false);
    console.log(err.message);
  }
});

/////VEHICULOS

//crear vehiculos AGREGAR REPRESENTANTE ID
app.post("/vehiculos", async (req, res) => {
  try {
      let data = req.body;
      console.log(data)
      const newVehiculo = await pool.query(
        "INSERT INTO vehiculos (matricula, marca, modelo, color) VALUES($1,$2,$3,$4) ",
        [data.matricula, data.marca, data.modelo, data.color]);
        res.statusCode = 201
        res.json(true);
       
      
        

  } catch (err) {
    res.statusCode = 400
    res.json(false);
    console.error(err.message);


 
  }
});

//get all vehiculos

app.get("/vehiculos", async (req, res) => {
  try {
    const allVehiculos = await pool.query("SELECT * FROM vehiculos");
    res.json(allVehiculos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a vehiculo

app.get("/vehiculos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const vehiculos = await pool.query("SELECT * FROM vehiculos WHERE matricula = $1", [
      id
    ]);

    res.json(vehiculos.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update vehiculos

app.put("/vehiculos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let data = req.body;
    const updateVehiculo = await pool.query(
      "UPDATE vehiculos SET matricula = $1, marca = $2, modelo = $3, color = $4  WHERE matricula = $5",
      [data.matricula, data.marca, data.modelo, data.color, id]
    );

    res.json(true);
  } catch (err) {
    res.json(false)
    console.error(err.message);
  }
});


//delete vehiculos
app.delete("/vehiculos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVehiculo = await pool.query("DELETE FROM vehiculos WHERE matricula = $1", [
      id
    ]);
    res.json(true);
  } catch (err) {
    res.json(false);
    console.log(err.message);
  }
});

/////ADMINISTRADORES 

//crear administradores
app.post("/administradores", async (req, res) => {
  try {
      let data = req.body;
      console.log(data)
      const newAdministrador = await pool.query(
        "INSERT INTO administradores (codigo, cedula, nombre, telefono, correo, cargo) VALUES($1,$2,$3,$4,$5,$6) ",
        [data.codigo, data.cedula, data.nombre, data.telefono, data.correo, data.cargo]);
        res.statusCode = 201
        res.json(true);
       
      
        

  } catch (err) {
    res.statusCode = 400
    res.json(false);
    console.error(err.message);


 
  }
});

//get all administradores

app.get("/administradores", async (req, res) => {
  try {
    const allAdministradores = await pool.query("SELECT * FROM administradores");
    res.json(allAdministradores.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a administrador

app.get("/administradores/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const administradores = await pool.query("SELECT * FROM administradores WHERE codigo = $1", [
      id
    ]);

    res.json(administradores.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update administrador

app.put("/administradores/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let data = req.body;
    const updateAdministrador = await pool.query(
      "UPDATE administradores SET codigo = $1, cedula = $2, nombre = $3, telefono = $4, correo = $5, cargo = $6 WHERE codigo = $7",
      [data.codigo, data.cedula, data.nombre, data.telefono, data.correo, data.cargo, id]
    );

    res.json(true);
  } catch (err) {
    res.json(false)
    console.error(err.message);
  }
});

//delete administradores
app.delete("/administradores/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAdministrador= await pool.query("DELETE FROM administradores WHERE codigo = $1", [
      id
    ]);
    res.json(true);
  } catch (err) {
    res.json(false);
    console.log(err.message);
  }
});

/////USUARIOS
//crear usuario
app.post("/usuarios", async (req, res) => {
  try {
      let data = req.body;
      console.log(data)
      const newUsuario = await pool.query(
        "INSERT INTO usuarios (identificador, password, role) VALUES($1,$2,$3) ",
        [data.identificador, data.password, data.role]);
        res.statusCode = 201
        res.json(true);
       
      
        

  } catch (err) {
    res.statusCode = 400
    res.json(false);
    console.error(err.message);


 
  }
});

//get all usuarios

app.get("/usuarios", async (req, res) => {
  try {
    const allUsuarios = await pool.query("SELECT * FROM usuarios");
    res.json(allUsuarios.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a usuario

app.get("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const usuarios = await pool.query("SELECT * FROM usuarios WHERE identificador = $1", [
      id
    ]);

    res.json(usuarios.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update usuario

app.put("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let data = req.body;
    const updateUsuario = await pool.query(
      "UPDATE usuarios SET password = $1 WHERE identificador = $2",
      [data.password, id]
    );

    res.json(true);
  } catch (err) {
    res.json(false)
    console.error(err.message);
  }
});

//delete usuarios
app.delete("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUsuario = await pool.query("DELETE FROM usuarios WHERE identificador = $1", [
      id
    ]);
    res.json(true);
  } catch (err) {
    res.json(false);
    console.log(err.message);
  }
});

/////COLA
//crear fila en cola
app.post("/cola", async (req, res) => {
  try {
      let data = req.body;
      console.log(data)
      const newUsuario = await pool.query(
        "INSERT INTO cola (fecha, posicion, estado, representante_id) VALUES($1,$2,$3,$4) ",
        [data.fecha, data.posicion, data.estado, data.representante_id]);
        res.statusCode = 201
        res.json(true);
       
      
        

  } catch (err) {
    res.statusCode = 400
    res.json(false);
    console.error(err.message);


 
  }
});

//get all cola

app.get("/cola", async (req, res) => {
  try {
    const allCola = await pool.query("SELECT * FROM cola");
    res.json(allCola.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a fila de cola

app.get("/cola/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cola = await pool.query("SELECT * FROM cola WHERE representante_id = $1", [
      id
    ]);

    res.json(usuarios.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update estado de cola

app.put("/cola/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let data = req.body;
    const updateCola = await pool.query(
      "UPDATE cola SET estado = $1 WHERE representante_id = $2",
      [data.estado, id]
    );

    res.json(true);
  } catch (err) {
    res.json(false)
    console.error(err.message);
  }
});
//delete fila en cola
app.delete("/cola/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCola = await pool.query("DELETE FROM cola WHERE representante_id = $1", [
      id
    ]);
    res.json(true);
  } catch (err) {
    res.json(false);
    console.log(err.message);
  }
});


app.listen(5000, () => {
    console.log("server has started on port 5000");
  });

