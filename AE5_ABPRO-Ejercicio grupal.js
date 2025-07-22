
//Creación de objeto "alien" y uso de métodos Math

var alien = {
    nombre: "Mojojojo",
    planeta: "Epsilon XV",
    habilidades: ["Telekinesis", " hiper-elasticidad", " mirada congelante"],
    generarEdad: function () {
        let edad = Math.round(Math.random() * 250) + 50;
        this.edad = edad;
    },
    generarEnergia: function () {
        let energia = Math.floor(Math.random() * 101);
        this.nivelEnergia = energia;
    },
    generarEstadoSalud: function () {
        this.estadoSalud = Math.random() > 0.5 ? "en perfecta forma" : "muy debilitada";
    },
    compararEdadEnergia: function () {
        if (this.nivelEnergia > this.edad) return "mayor que";
        if (this.nivelEnergia === this.edad) return "igual que";
        return "menor que";
    },
    presentarse: function () {
        this.generarEdad();
        this.generarEnergia();
        this.generarEstadoSalud();
        console.log(`Hola, mi nombre es ${this.nombre}, provengo del planeta ${this.planeta} y tengo ${this.edad} años de vida.`);
        console.log(`Algunas de mis habilidades son: ${this.habilidades}. Mi nivel de energía es ${this.nivelEnergia}.`);
        console.log(`Mi nivel de energía es ${this.compararEdadEnergia()} mi edad, y actualmente mi salud se encuentra ${this.estadoSalud}.`);
    }
};

alien.presentarse();

//Info de "alien" con notación de puntos

console.log("----------esta es mi información accedida por notación de puntos---------------");

console.log(`mi nombre es: ${alien.nombre}`)
console.log(`provengo del planeta ${alien.planeta}`)
console.log(`tengo: ${alien.edad} años (generados aleatoriamente)`);
console.log(`algunas de mis habilidades son ${alien.habilidades}`);
console.log(`y mi salud está: ${alien.estadoSalud} (generado aleatoriamente)`);

//Info de alien con notación de corchetes

console.log("----------esta es mi información accedida por notación de corchetes---------------");

console.log(`mi nombre es: ${alien["nombre"]}`)
console.log(`provengo del planeta ${alien["planeta"]}`)
console.log(`tengo: ${alien["edad"]} años (generados aleatoriamente)`);
console.log(`algunas de mis habilidades son ${alien["habilidades"]}`);
console.log(`y mi salud está: ${alien["estadoSalud"]} (generado aleatoriamente)`);

//Uso de objeto string

console.log("---------------conversión de nombre a mayúsculas, extracción de inicial y búsqueda de substring---------------");

let nombreMayuscula = alien.nombre.toUpperCase();
console.log(`Nombre en mayúsculas: ${nombreMayuscula}`);

let inicialNombre = nombreMayuscula.slice(0, 1);
console.log(`La inicial de mi nombre es: ${inicialNombre}`);

let busquedaSubstring = alien.nombre.includes("t");
console.log(`¿mi nombre incluye la letra T?: ${busquedaSubstring}`);

console.log("---------------comparación de string primitivo y string creado como Objeto---------------");

let nombrePrimitivo = "Mojojojo";
let nombreComoObjeto = new String("Mojojojo");

console.log(`comparación de valores nombrePrimitivo == nombreComoObjeto: ${nombrePrimitivo == nombreComoObjeto
    }`);

console.log(`comparación de valores nombrePrimitivo === nombreComoObjeto: ${nombrePrimitivo === nombreComoObjeto
    }`);

console.log(`comparación de tipos nombrePrimitivo === nombreComoObjeto: ${typeof nombrePrimitivo === typeof nombreComoObjeto}`);

//Resumen de información final de "alien" ordenado en consola

console.log("----------Resumen final de información de objeto Alien----------");

console.log(`nombre: ${alien.nombre}.`);
console.log(`planeta: ${alien.planeta}.`);
console.log(`edad: ${alien.edad}.`);
console.log(`habilidades: ${alien.habilidades}.`);
console.log(`nivel de energía: ${alien.nivelEnergia}.`);
console.log(`salud: ${alien.estadoSalud}`);
console.log(`Nombre en mayúsculas: ${nombreMayuscula}`);
console.log(`inicial de mi nombre: ${inicialNombre}`);
console.log(`¿mi nombre incluye la letra T?: ${busquedaSubstring}`);


