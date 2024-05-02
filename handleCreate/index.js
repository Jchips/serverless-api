const dynamoose = require('dynamoose');
const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "city": String
});
const peopleModel = dynamoose.model('people', schema);

exports.handler = async (event) => {
  let parsedBody = JSON.parse(event.body);
  console.log('parsedBody', parsedBody);
  const response = { statusCode: null, body: null };
  try {
    let addPerson = await peopleModel.create(parsedBody);
    response.statusCode = 201;
    response.body = JSON.stringify(addPerson);
  } catch (error) {
    response.statusCode = 500;
    response.body = JSON.stringify(error);
  }
  return response;
};
