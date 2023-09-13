const app = require('./app');
require('dotenv').config();

// eslint-disable-next-line no-undef
const PORTA = process.env.PORTA || 3333;

app.listen(PORTA, () => {
    console.log('==========================================');
    console.log(`✅ | Servidor está rodando na porta: ${PORTA}`);
    console.log('==========================================');
});