const mongoose = require ( 'mongoose' );

const connectDB = async () => {
try {
await mongoose. connect (process. env .MONGO_DB_URI) ;
console. log ('Connexion a MongoDB reussie !' ) ;
} catch (err) {
console. error ('Erreur de connexion a MongoDB :' , err.
message) ;
// Quitter le processus avec un code d'erreur
process.exit (1);

}
};
module. exports = connectDB;