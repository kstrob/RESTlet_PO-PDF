# RESTlet_PO-PDF
Netsuite Javascript/RESTlet function to generate a PDF of purchase order and add it to the file cabinet in Netsuite using [Make](https://www.make.com/en)


This repository contains a NetSuite RESTlet implemented in JavaScript that takes an internal ID of a Purchase Order and generates a PDF document. The PDF is automatically stored in the NetSuite File Cabinet. This project aims to streamline the process of handling Purchase Orders by automating the generation and storage of corresponding PDF documents directly within NetSuite's ecosystem.

## Getting Started

These instructions will get you a copy of the project up and running on your NetSuite account for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Access to a NetSuite account with permissions to manage scripts and file cabinets.
- SuiteScript API knowledge for custom script implementation.
- Access to a [Make](https://www.make.com/en) account, for production use a Make Enterprise account

### Installation
1. Log in to your NetSuite account and navigate to Customization > Scripting > Scripts > New.
2. Download the script provided
3. Upload the script file from the repository (Ensure that the name of the file matches the "file Name" when you upload it into Netsuite).
4. Create a Script Record and deploy it, associating it with the relevant Purchase Order form.
5. Copy the script ID and deploy ID
6. Log in to Make, open a new scenario, and select the `Make a RESTlet API call` Netsuite Module
7. Create your [Netsuite Connection](https://www.make.com/en/help/app/netsuite)
8. Paste your script ID and Deploy ID into the module
9. Change the method to GET
10. Locate a recent Purchase Order in NS and copy the internal ID
11. In the Make module configuration, and a query parameter `po_id`=`INTERNAL_ID` - save the configuration
12. Right click on the module, and select `Run Once`
13. This will output a `Body` that will include the relative url to the file in your file cabinet
14. Add a `Parse JSON` module, and map the entire `Body` response from your RESTlet
15. Add a `Make an HTTP Request` module and add your netsuite URL for example `https://your-netsuite-domain.app.netsuite.com` followed by mapping the `url` that is outputed by the `Parse JSON` module - for example `https://your-netsuite-domain.app.netsuite.com` `url` (The `url` returned has a `/` so you can just simply map the `url` after your domain/url
16. Click run once at the bottom of the Make scenario to execute all modules together
17. This will output the binary data of your PDF that you can upload to any third party

### Usage
To use the RESTlet, send a request with the internal ID of the Purchase Order for which you want to generate a PDF as a query parameter (po_id = {{internalID}}). The RESTlet will process the Purchase Order, generate a PDF, and store this PDF in the specified location within the File Cabinet.

Example request: GET `https://your-netsuite-domain.com/app/site/hosting/restlet.nl?script=SCRIPT_ID&deploy=DEPLOY_ID&po_id=INTERNAL_ID`

## Integration using Make 
This script is designed to be easily integrated with other external services like Monday.com, Google Drive, Email, etc. 




