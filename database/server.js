const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(cors(corsOptions))

const talentGrades = [
    { id: 1, name: 'Expander', deleted_at: null },
    { id: 5, name: 'Junior1', deleted_at: null },
    { id: 6, name: 'Senior', deleted_at: null },
    { id: 7, name: 'Junior', deleted_at: null },
    { id: 8, name: 'Expert1', deleted_at: null },
    { id: 9, name: 'Expert2', deleted_at: null },
    { id: 10, name: 'Manager', deleted_at: null },
    { id: 11, name: 'Actif', deleted_at: null },
    { id: 12, name: 'Consultant', deleted_at: null },
    { id: 13, name: 'Talents', deleted_at: null }
];

app.get('/palm/api/v1/talent_grades/', (req, res) => {
    res.json(talentGrades);
});

const talentStatus = [
    { id: 1, name: 'Actif', deleted_at: null },
    { id: 5, name: 'Inactif', deleted_at: null },
    { id: 2, name: 'Pending Expander', deleted_at: null },
    { id: 4, name: 'Pending Inpanders', deleted_at: null },
    { id: 3, name: 'Rejeté', deleted_at: null }
];

app.get('/palm/api/v1/talent_status/', (req, res) => {
    res.json(talentStatus);
});

const talentUnits = [
    { id: 1, name: 'X', deleted_at: null },
    { id: 5, name: 'XX', deleted_at: null }
];

app.get('/palm/api/v1/talent_units/', (req, res) => {
    res.json(talentUnits);
});

const port = 3000; // Port sur lequel l'API sera écoutée
app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});
