### Front Prueba PJ

##### Puesta a punto

1) Instalación
```sh
npm install
```

2) Configuración: dento de `src/config/index.js` se puede parametrizar el proyecto
- Por defecto en el puerto del backend esta configurado en el <b>3001</b>

3) Inicio del proyecto

| Comando         | Detalle                                        | 
| -------------   | -------------                                  |
| `npm start`     | inicio del proyecto en modo desarrollo         |
| `npm run build`  | Realiza la compilación para el modo producción | 

##### Detalle del proyecto

El proyecto tiene un menu con dos opciones, cada opcion corresponde a una ruta del proyecto:

<b>Edificios:</b> Se puede visualizar los edificios creados, crear nuevos edificios, y por cada edificio se puede agregar `dependencias`
<b>Dependencias:</b> Se puede visualizar las dependencias creadas, crear nuevas dependencias, visualizar el detalle de la dependencia, muestra el detalle del edificio en cual se vincula la dependencia.

##### Rutas

| path              | Detalle               | 
| -------------     | -------------         |
| `/`               | menu del proyecto     |
| `/edificios`      | modulo edificios      | 
| `/dependencias`   | modulo dependencias   | 


##### Pendientes del proyecto

1) Poder editar edificios.
2) Poder editar dependencias.
3) Poder desvincular las dependencias de los edificios.