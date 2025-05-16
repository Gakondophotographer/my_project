const express = require('express');
const cors = require('cors')
const { Selectbook, Insertbook, deletebook, updatebook } = require('./controller/book');
const { Selectpublisher, Insertpublisher, deletepublisher, updatepublisher } = require('./controller/publisher');
const { Selectsupplier, Insertsupplier, deletesupplier, updatesupplier } = require('./controller/supplier');
const { Selecthome, Inserthome, deletehome, updatehome } = require('./controller/home');
const { registermember } = require('./controller/member');
const { login } = require('./controller/member');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// ========== Book Routes ==========
app.get('/selectbook', Selectbook);
app.post('/insertbook', Insertbook);
app.delete('/deletebook/:id', deletebook);
app.put('/updatebook/:id', updatebook);

// ========== Publisher Routes ==========
app.get('/selectpublisher', Selectpublisher);
app.post('/insertpublisher', Insertpublisher);
app.delete('/deletepublisher/:id', deletepublisher);
app.put('/updatepublisher/:id', updatepublisher);

// ========== Supplier Routes ==========
app.get('/selectsupplier', Selectsupplier);
app.post('/insertsupplier', Insertsupplier);
app.delete('/deletesupplier/:id', deletesupplier);
app.put('/updatesupplier/:id', updatesupplier);

// ========== Home Routes ==========
app.get('/selecthome', Selecthome);
app.post('/inserthome', Inserthome);
app.delete('/deletehome/:id', deletehome);
app.put('/updatehome/:id', updatehome);


//===========member==========

app.post('/registermember', registermember);

//=========login=========


app.post('/login', login);



// Start server
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
