# Objetivo

- Llamar 10 veces a [BoredApi](https://www.boredapi.com/api/activity)
- Renderizar las actividades y darles estilos
- Añadir un filtro por actividad y tipo que se pueda mostrar/ocultar
- Añadir un botón que realice una nueva llamada de actividades

## Instalación

Este proyecto ha sido creado usando [Create React App](https://github.com/facebook/create-react-app).
Para instalar y ejecutar, usar los siguientes comandos.

- npm i
- npm start

## Librerías usadas

La única librería que he usado ha sido React Query. Gracias a ella, me he podido ahorrar codigo en la parte de controlar el estado del fetch, si ha
dado error, si está cargando etc. Otro motivo es que era una librería que conocía, pero hasta ahora no había usado y queria aprender su manejo. Una librería
parecida que si había usado era RTK Query, de Redux, pero React Query me ha parecido más sencilla de usar. Tampoco me he metido en mutations, a lo mejor ahí
se complica la cosa.

No he querido usar más librerias ya que al ser un proyecto sencillo con apenas 3 componentes, no quería meterle material-ui, redux, alguna librería para el css/animar como tailwind o framer motion etc ya que no lo he visto necesario. Si bien es cierto que cualquiera de estas librerías me hubiera ahorrado código, tampoco quería añadirlas para apenas usarlas.

## Cosas que mejoraría

- Estilos del componente FilterInput. No ha quedado muy vistoso.
- Optimizar imágenes. Añadir lazy loading podría mejorar la carga cuando hay muchas. Aparte en el hover, cuando hace el scale, hay un momento que se ve un poco de "blur". Usar
  imports en vez de paths.
- La función getActivityColor en Activity.tsx podría ser dinámica. Con Tailwind hubiera sido más fácil.
- Tests en general.
