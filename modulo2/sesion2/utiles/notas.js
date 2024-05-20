import fs from "node:fs"
import chalk from "chalk"


const cargarNotas = () =>
    {
        try
            {
                const dataBuffer = fs.readFileSync(`notas.json`);
                const dataJSON = dataBuffer.toString();
                return JSON.parse(dataJSON);
            }
            catch(e)
                {
                    console.log(e)
                    return[];
                }
    };
    
    export const guardarNotas = (notas) => 
        {
            const dataJSON = JSON.stringify(notas)
            fs.writeFileSync(`notas.json`, dataJSON)
        }
        export const agregarNotas = (title, body) => 
            {
                const notas= cargarNotas()
                const duplicateNote = notas.find((note) => note.title === title);

                if (!duplicateNote)
                    {
                        notas.push({
                            title,
                            body
                        })
                        guardarNotas(notas)
                        console.log(chalk.green.inverse("nota agregada"))}
                        else
                        {console.log(chalk.red.inverse (`nota no agregada`));

                        }
                    }
            

           export const eliminarNotas = (title) => 
                {
                    const notas = cargarNotas()
                    const notesToKeep = notas.filter((note) => note.title !== title);

                    if(notas.length > notesToKeep.length)
                        {
                            guardarNotas(notesToKeep);
                            console.log(chalk.green.inverse("nota eliminiada"))

                        }
                        else
                        {
                            console.log(chalk.red.inverse(`nota no eliminada`))
                        }
                }

               export const listarNotas = () => 
                    {
                        const notas = cargarNotas()
                        console.log(chalk.inverse(`tus notas`))
                        notas.forEach((nota) =>
                            {
                                console.log(nota.title)
                            });
                    }

                    export const leerNotas =(title) => 
                        {
                            const notas = cargarNotas()
                            const nota= notas.find((nota)=>nota.title=== title);

                            if(nota)
                                {
                                    console.log(chalk.inverse(nota.title))
                                    console.log(chalk.blue(nota.body))
                                
                                }
                                else
                                {
                                    console.log(chalk.red.inverse(`nota no encontrada`))
                                }

                        
                                
                            }
                           
                          export const editarNotas = (title, nuevaNota) => {
                                const notas = cargarNotas();
                                const note = notas.find((note) => note.title === title);
                                if(note) {
                                    note.body = nuevaNota;
                                    guardarNotas(notas);
                                    console.log(chalk.green.inverse('La nota se modificó correctamente'));
                                } else {
                                    console.log(chalk.red.inverse('Nota no encontrada'));
                                }
                            };
                      
                    