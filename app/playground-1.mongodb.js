use(`personasnaturales`)
/*db.createCollection(`personas`)
db.personas.insertMany()*/

db.personas.find()

use(`personasnaturales`)
db.personas.find({
    "codigoPais: JP"
})


use(`personasnaturales`)
db.personas.find({
    "edad" :{ 
        "$gt": 55
    } 
})

use(`personasnaturales`)
db.personas.find({
    "edad" :{ 
        "$gte": 55
    } 
})

use(`personasnaturales`)
db.personas.find({
    "edad" :{ 
        "$lt": 28
    } 
})

use(`personasnaturales`)
db.personas.find({
    "edad" :{ 
        "$lte": 28
    } 
})


//and or
use(`personasnaturales`)
db.personas.find({
    "$and": [
        {"genero": "Female"},
        {"codigoPais": "JP"}
    ]
})




