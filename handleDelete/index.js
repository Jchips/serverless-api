const dynamoose = require('dynamoose');
const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "city": String
});
const peopleModel = dynamoose.model('people', schema);

exports.handler = async (event) => {
  const response = { statusCode: null, body: null };
  try {
    await peopleModel.delete({ "id": event.pathParameters.id });
    response.statusCode = 200;
    response.body = JSON.stringify({});
  } catch (error) {
    console.error(error);
    response.statusCode = 500;
    response.body = JSON.stringify(error.message);
  }
  return response;
};
