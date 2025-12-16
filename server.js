const fastify = require('fastify')
const crypto = require('crypto')

const server = fastify()

const courses = [
    {id: '1', tittle: 'Curso de Node.JS'},
    {id: '2', tittle: 'Curso de React'},
    {id: '3', tittle: 'Curso de Vue'},
    {id: '4', tittle: 'Curso de Angular'},
]

server.get('/courses' , () => {
    return courses;
})

server.get('/courses/:id' , (request, reply) => {
    const { id } = request.params
    
    const course = courses.find((c) => c.id === id);
    
    if(course) { 
        return { course }
    }

    return reply.status(404).send()
})

server.post('/courses', (request, reply) => {
    const courseId = crypto.randomUUID()
    const courseTitle = request.body.title
    
    if(!courseTitle) {
        return reply.status(400).send({ message: 'Titulo Obrigatório'})
    }

    courses.push({ id: courseId, title: courseTitle })
    
    return reply.status(201).send({ id: courseId, 'message': 'Criado com sucesso!' })
})

server.delete('/courses/:id', (request, reply) => {
    const { id } = request.params
    
    if(!id) {
        return reply.status(404).send({ message: 'ID não fornecido.' })
    }    

    const courseIndex = courses.find((c) => c.id === id);

    if (courseIndex === -1) {
        return reply.status(404).send({ message: 'Curso não encontrado.' })
    }
    
    const courseIdToRemove = courseIndex.id;

    const indexToRemove = courses.findIndex(c => c.id === courseIdToRemove);
    courses.splice(indexToRemove, 1);

    return reply.status(200).send({ 'message': 'Removido com sucesso!', courses })

})


server.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running')
})