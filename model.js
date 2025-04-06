/**
 * TODO(developer): Uncomment these variables before running the sample.\
 */

// const modelDisplayName = 'YOUR_MODEL_DISPLAY_NAME';
// const metadataSchemaUri = 'YOUR_METADATA_SCHEMA_URI';
// const imageUri = 'YOUR_IMAGE_URI';
// const artifactUri = 'YOUR_ARTIFACT_URI';
// const project = 'YOUR_PROJECT_ID';
// const location = 'YOUR_PROJECT_LOCATION';

// Imports the Google Cloud Model Service Client library
const {ModelServiceClient} = require('@google-cloud/aiplatform');

// Specifies the location of the api endpoint
const clientOptions = {
  apiEndpoint: 'us-central1-aiplatform.googleapis.com',
};

// Instantiates a client
const modelServiceClient = new ModelServiceClient(clientOptions);

async function uploadModel() {
  // Configure the parent resources
  const parent = `projects/${project}/locations/${location}`;
  // Configure the model resources
  const model = {
    displayName: modelDisplayName,
    metadataSchemaUri: '',
    artifactUri: artifactUri,
    containerSpec: {
      imageUri: imageUri,
      command: [],
      args: [],
      env: [],
      ports: [],
      predictRoute: '',
      healthRoute: '',
    },
  };
  const request = {
    parent,
    model,
  };

  console.log('PARENT AND MODEL');
  console.log(parent, model);
  // Upload Model request
  const [response] = await modelServiceClient.uploadModel(request);
  console.log(`Long running operation : ${response.name}`);

  // Wait for operation to complete
  await response.promise();
  const result = response.result;

  console.log('Upload model response ');
  console.log(`\tModel : ${result.model}`);
}
uploadModel();