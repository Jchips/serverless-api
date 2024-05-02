const dynamoose = require('dynamoose');
const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "city": String
});
const peopleModel = dynamoose.model('people', schema);

exports.handler = async (event) => {
  const response = {
    statusCode: null,
    body: null,
  };

  try {
    let editPerson = await peopleModel.update({ "id": event.pathParameters.id }, JSON.parse(event.body));
    response.statusCode = 200;
    response.body = JSON.stringify(editPerson);
  } catch (error) {
    console.error(error);
    response.statusCode = 500;
    response.body = JSON.stringify(error.message);
  }
  return response;
};
