let client = new stitch.StitchClient(appname);
client.login().then( result => {
            console.log("authenticated");
            let owner_id = client.authedId()
            console.log(owner_id)
        }).catch( err => {
            console.error("Error performing auth",err)
        });
const mongoClient = client.service("mongodb", "mongodb-atlas");
const db = mongoClient.db("portal_users");
const unit_db = mongoClient.db('portal_units')
const coll = db.collection("users");
const unit_collection = 'units'

function login_wrapper(username, password, callback_success, callback_failure){

  return process_login_attempt(username, password, callback_success, callback_failure)
}

function process_login_attempt(username, password, callback_success, callback_failure){
	console.log(username);
  coll.find({'email': username}).then(docs => {
          console.log("Found docs", docs);
          console.log("[MongoDB Stitch] Connected to Stitch");
          client.login(username, password).then((x) => {
            console.log('in'); 
            callback_success(docs[0])}).catch(err => {
                console.log(err.error); 
                callback_failure()});
          }).catch(err => {
            console.error(err);
});
  
}

function register_wrapper(creds){
  return process_registration_attempt(creds)
}

function process_registration_attempt(creds){
  console.log(creds);
  let pwd = creds['pwd']
  delete creds['pwd']
  delete creds['confirm_pwd']
  client.register(creds.email, pwd).then((result) => {
    console.log(result)
    db.collection('users').insertOne(creds, function(err, data){}).then().catch(err => {
          console.error(err)
          console.log(err.error)});
  }).catch(err => {
            console.error(err)
            console.log(err.error)});

}

function process_successful_registration(token, tokenid){
  client.auth.provider('userpass').emailConfirm(tokenid, token).then((result) => {console.log(result)}).catch((err) => {
            console.error(err)
            console.log(err.error)});
}

function post_unit(creds){
  delete creds['step']
  creds.agenda_mins.map((x) => x ? x : '0')
  unit_db.collection(unit_collection).insertOne(creds, function(err, data){
  }).then((result) => {console.log(result)}).catch((err) => {
            delete creds['confirmed']
            console.error(err)
            console.log(err.error)});
}

function find_units(filters, callback){
  unit_db.collection(unit_collection).find(filters).then((result) => {
    callback(result)
  })
}

export { login_wrapper, register_wrapper, process_successful_registration, post_unit, find_units }
