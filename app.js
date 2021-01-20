const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));

        break;
    default:
        console.log('comando no reconocido');
}



// console.log(argv);
// console.log('limite', argv.limite);


// let parametro = argv[2];

// let base = parametro.split('=')[1];


// console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));

// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${base*i}\n`;
// }

// // const data = new Uint8Array(Buffer.from('Hello Node.js'));

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

//     if (err) throw err;


//     console.log(`El archivo tabla-${base}.txt se creo exitosamente`);
// });