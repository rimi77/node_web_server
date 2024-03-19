/* const express = require("express");
const path = require("path");

const startServer = (options) => {
  const { port, public_path = "public" } = options;
  //console.log(port);
  //console.log(public_path);
  const app = express();
  
  // para usar middleware en express, se usa la palabra "use"
  app.use(express.static(public_path)); //contenido estático que ponemos disponible
  
  app.get("*", (req, res) => {
    const indexPath = path.join(
      __dirname + `../../../${public_path}/index.html`
      );
      res.sendFile(indexPath);
    });
    app.listen(port, () => {
      console.log(`Escuchando en el puerto ${port}`);
    });
  };
  
  module.exports = {
    startServer,
  };
  */

/*  Para trabajar con modulos */
/* Migrar Web Server a ES6 */
import express from "express";
import path from "path";

export const startServer = (options) => {
  const { port, public_path = "public" } = options;

  const app = express();

  // para usar middleware en express, se usa la palabra "use"
  app.use(express.static(public_path)); //contenido estático que ponemos disponible

  app.get("*", (req, res) => {
    const indexPath = path.join(
      __dirname + `../../../${public_path}/index.html`
    );
    res.sendFile(indexPath);
  });
  app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
  });
};
