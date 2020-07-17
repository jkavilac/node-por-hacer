const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea por hacer"
};

const completado = {
    alias: 'c',
    desc: "Marca como completado o pendiente la tarea"
}       

const argv = require('yargs')
                .command(
                    'crear',
                    'Crear una tarea por hacer',
                    {
                        descripcion
                    }
                )
                .command(
                    'actualizar',
                    'Actualizar el estado completado de una tarea',
                    {
                        descripcion,
                        completado                 
                    }
                )
                .command(
                    'borrar',
                    'Borrar una tarea por hacer',
                    {
                        completado
                    }
                )
                .command(
                    'listar',
                    'Despliega las tareas almacenadas ',
                    {
                        completado
                    }
                )
                .help()
                .argv;

module.exports = {
    argv
}