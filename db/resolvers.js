// Resolvers (Siempre son un objecto)
const resolvers = {
    Query: {
        obtenerCurso: () => "Algo"
    },
    Mutation: {
        nuevoUsuario: () => "Creando nuevo usuario"
    }
}

module.exports = resolvers;