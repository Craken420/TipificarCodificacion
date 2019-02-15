const fs = require('fs')

const { detectarCodificacion } = require('./Utilerias/Codificacion/procesadorCodificacion')
const { leerCarpetaFiltrada } = require('./Utilerias/OperadoresArchivos/readDirOnlyFile')
const { recodificarArchivo }= require('./Utilerias/Codificacion/procesadorCodificacion')

const carpeta = 'Testing\\'
const carpetaReportes = 'C:\\Users\\lapena\\Documents\\Luis Angel\\Sección Mavi\\Intelisis\\Intelisis5000\\Reportes MAVI'

leerCarpetaFiltrada(carpeta, ['.vis','.frm','.esp','.tbl','.rep','.dlg'])
.then(archivos => {

    console.log('\n------------------------------------------------\nAntes: \n')
    archivos.forEach(x => console.log(
        detectarCodificacion(x)
        )
    )
})

leerCarpetaFiltrada(carpeta, ['.vis','.frm','.esp','.tbl','.rep','.dlg'])
.then(archivos => {

    archivos.forEach(archivo =>  {
        let content = new Buffer(recodificarArchivo(archivo, 'ASCII'),'ASCII')
        fs.writeFileSync(archivo,
            content.toString('ASCII')
        )
    })
    
})

leerCarpetaFiltrada(carpeta, ['.vis','.frm','.esp','.tbl','.rep','.dlg'])
.then(archivos => {

    console.log('\n------------------------------------------------\nDespues: \n')
    archivos.forEach(x => console.log(
        detectarCodificacion(x)
        )
    )
})
