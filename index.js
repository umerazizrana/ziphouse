const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express()

const port = 5000

app.use(express.json());

//require('./routes/routes');

const userApi = require('./user/users');
const groupApi = require('./group/groups')

app.get('/users/:userId', userApi.getUserById);
app.get('/users', userApi.getAllUsers);
app.get('/groups/:groupId', groupApi.getGroupById);
app.get('/groups', groupApi.getAllGroups);


app.get('/', (req, res) => res.json({ message: 'Welcome to Zip Homes' }))

app.listen(port, () => console.log(`App listening on port ${port}!`))




app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));