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
    let result;
    if (event.pathParameters) {
      result = await peopleModel.scan('id').contains(event.pathParameters.id).exec();
    } else {
      result = await peopleModel.scan().exec();
    }
    console.log(result);
    response.statusCode = 200;
    response.body = JSON.stringify(result);
  } catch (error) {
    console.error(error);
    response.statusCode = 500;
    response.body = JSON.stringify(error.message);
  }
  return response;
};