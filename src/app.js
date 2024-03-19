//console.log("Hola Mundo desde app.js");
/* const { envs } = require("./config/env");
const { startServer } = require("./server/server");

const main = () => {
  //console.log("Aqui comenzaremos el servidor");
  //console.log(envs);
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });
}; 

// función agnostica autoconvocada:
// Agnóstica porque no tiene nombre
// autoconvocado porque la ejecutamos con los parentesis
(async () => {
  main();
})();
*/

// Para trabajar con módulos:
/* Migrar Web Server a ES6 */

import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });
};

(async () => {
  main();
})();
