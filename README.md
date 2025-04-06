# gcp-ml-model
Deploying machine learning model on GCP 


## GCP Setup

#### step 1
Enable Billing 

#### step 2
Go to IAM Admin > Managed Resources > Create New Project 

#### step 3
Go to App Engine > Dashboard > Select the project 

#### step 4 
Download the Google Cloud SDK 

#### step 5 
Open terminal and login into the cloud SDK  



--------------------------------


## IDE 

### step 1 
[main].py for GCP 




## Method 3 

[Deploy a model to an endpoint](https://cloud.google.com/vertex-ai/docs/general/deployment) 

1. Endpoint : Location in which to run predictions
2. Model : Container to use (ModelContainerSpec)
3. DeployedModel : Compute resources to use for online prediction

```
https://us-central1-aiplatform.googleapis.com/v1/projects/{project}/locations/{location}/endpoints/{endpoint}:predict

```



References 
1. https://medium.com/analytics-vidhya/google-cloud-platform-custom-model-upload-rest-api-inference-and-model-version-monitoring-80216e69fbc2
2. Vertex AI - https://cloud.google.com/vertex-ai/docs/samples/aiplatform-upload-model-sample#aiplatform_upload_model_sample-python
3. Deploy a model to an endpoint : https://cloud.google.com/vertex-ai/docs/general/deployment