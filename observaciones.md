# Observaciones

Naty, felicitaciones por tu trabajo. Tu portfolio se ve muy elegante, limpio y profesional. Me gustan los colores y tipografías, y tengo que destacar la increíble atención al detalle que demostrás y lo bien que anda tu responsive. 

Como dije en clase, este trabajo no se hace para que constates conocimientos, sino para que aprendas: en ese sentido, mi intencion es que estos comentarios te sirvan para aprender, mejorar tu codigo a futuro e ir apreciando mejor qué se espera de nosotras como desarrolladoras front end.

## Estructura correcta de documento HTML

Tu HTML esta realmente excelente. Claro, prolijo, muy bien comentado e identado. Lo único a comentar es que dejar muchos saltos de linea innecesarios que dificultan la lectura. Privilegiá escribir uno debajo del otro sin un espacio entre cada uno. 

Te dejo minimos comentarios en el HTML con cositas a mejorar. 

## Respeta la consigna

- El portfolio cuenta con las secciones solicitadas
- Al clickear en los links de navegación, debe llevar a la sección correspondiente
- Al clickear en los links de contacto, debe llevar a la página externa
  correspondiente
- El portfolio debe tener un diseño responsivo y verse correctamente en distintos dispositivos
- El portfolio debe estar deployado y ser accesible desde una URL
- El repositorio en GitHub debe tener un readme adecuado

Todos estos puntos están cumplidos. Menciono especialmente tu responsive: es increíble lo bien que solucionaste las distintas resoluciones, siguiendo casi a la perfección el modelo y preocupandote para que todo se vea hermoso, veamos tu web desde cualquier dispositivo. 

### Respeta el diseño dado

Cumplido. Una observación acá sería, a nivel diseño, que en el modelo de Ada el borde del formulario desaparece en dispositivos moviles: en tu portfolio no y queda un poco incomodo ver el borde justo en el limite de la pantalla. 

La otra impresión es que cada vez que hacemos hover o foco en un elemento se hace un px más grande y parece moverse con respecto al resto, lo que hace algo incómoda la navegacion. Esto ocurre porque les estas dando un borde de 1px. Podes mantener el borde pero darle a todos los elementos box-sizing border box para eliminar este problema. 

### Buena estructura de proyecto

Cumplido casi a la perfección, pero el favicon deberia estar en la carpeta principal y llamarse favicon.ico, ya que asi lo va a buscar muchos servicios de hosting. 

Es buena practica que todos tus archivos tengan su nombre en minuscula, ya que asi se evitan erorres de importacion. 

### Código bien indentado

Tabulas bien, pero ocasionalmente tenes algunos errores. 

Cada vez que una etiqueta esta adentro de otra, se debe indicar con un tabulado:
```html 
    <a>
        <p>Texto</p>
    </a>
```

Podes no dejar un salto de linea (en estructuras breves es lo recomendable), pero en ese caso se deben abrir y cerrar en la misma linea:

```html
    <a><p>Texto</p></a>
```

En lineas muy largas (mas de 90 caracteres, VSCode te lo indica abajo a la derecha como "Ln 5 Col 90"), es buena práctica dejar un salto de linea para que el lector no tenga que hacer scroll horizontal para ver como se cierra la etiqueta. 

Recordá que con click derecho + format document, VSCode va a acomodarte el HTML. También podés bajarte librerias que hacen esto para CSS y JS. 

En tu CSS el tabulado está perfecto. 

### Comentarios que permiten mejorar la legibilidad del código

Ausentes en HTML, pero ahi no los considero tan necesarios para un proyecto breve como este. Impecables en CSS. 

### Uso correcto de etiquetas semánticas

En general usas bien las etiquetas semánticas. Me llama la atención que hayas usado `div` para las tarjetas de Mis Conocimientos: yo diría que deberían ser `article`.

Usas en varias ocasiones un `section` adentro de otro y lo considero un error: las secciones en el portfolio estan bien definidas, no hay subsecciones. Si estan adentro de una de tus `section` deberian ser `div`. 

### Buenos nombres de clases

Cumplido, excelentes nombres de clases. 

### Código CSS bien estructurado

Cumplido, te dejo algunos comentarios en el archivo. 

### Reutilización de estilos

Cumplido

### Cumple con criterios básicos de accesibilidad

- Los colores tienen un contraste adecuado

Cumplido 

- Las imágenes tiene el atributo `alt` que corresponde

Incumplido. Si te pareció innecesario agregar `alt` para las imagenes de Mis Proyectos, correspondía un aria-hidden en lugar de dejar el alt vacío (que indica que la imagen es decorativa: aquí claramente es ilustrativa). Dejarlo vacía es decirle al usuario que depende del lector de pantalla "aquí hay una imagen y no te voy a decir qué es", lo que no es una buena experiencia. 

- Los íconos y elementos que no presentan texto agregan la información correspondiente por otros medios (etiquetas aria, texto oculto)

Cumplido. 

- Los íconos y elementos que no necesitan ser anunciados por un lector de pantalla tienen la etiqueta aria
  correspondiente

No veo un caso donde lo uses, pero tampoco creo que lo necesites. 

- Commits con mensajes adecuados

Cumplido, noto muchos y buenos commits en tu proyecto, lo que siempre se agradece.

- Cuenta con un favicon

Cumplido, aunque debería estar en la carpeta principal y llamarse favicon.ico

### Nota: 9
