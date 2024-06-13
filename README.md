# RESTlet_PO-PDF
Netsuite Javascript/RESTlet function to generate a PDF of purchase order and add it to the file cabinet in Netsuite

This repository contains a NetSuite RESTlet implemented in JavaScript that takes an internal ID of a Purchase Order and generates a PDF document. The PDF is automatically stored in the NetSuite File Cabinet. This project aims to streamline the process of handling Purchase Orders by automating the generation and storage of corresponding PDF documents directly within NetSuite's ecosystem.

## Getting Started

These instructions will get you a copy of the project up and running on your NetSuite account for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Access to a NetSuite account with permissions to manage scripts and file cabinets.
- SuiteScript API knowledge for custom script implementation.

### Installation
1. Log in to your NetSuite account and navigate to Customization > Scripting > Scripts > New.
2. Download the script provided
3. Upload the script file from the repository (Ensure that the name of the file matches the "file Name" when you upload it into Netsuite).
4. Create a Script Record and deploy it, associating it with the relevant Purchase Order form.

### Usage
To use the RESTlet, send a request with the internal ID of the Purchase Order for which you want to generate a PDF as a query parameter (po_id = {{internalID}}). The RESTlet will process the Purchase Order, generate a PDF, and store this PDF in the specified location within the File Cabinet.

Example request: GET https://your-netsuite-domain.com/app/site/hosting/restlet.nl?script=SCRIPT_ID&deploy=DEPLOY_ID&po_id=INTERNAL_ID'

## Integration using Make 
This script is designed to be easily integrated with other external services like Monday.com, Google Drive, Email, etc. 

For common use cases, such as transferring the generated PDFs from the NetSuite File Cabinet to these external platforms, please refer to our other repository: 



