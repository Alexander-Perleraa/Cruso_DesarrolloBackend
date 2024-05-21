const {format} = require(`date-fns`)

function formatoFecha(fecha)
{
    return format(fecha, `yyy-MM-dd`)
}

module.exports = formatoFecha