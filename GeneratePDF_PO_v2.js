/**
 * @NApiVersion 2.x
 * @NScriptType Restlet
 * @NModuleScope SameAccount
 */
define(['N/render', 'N/record', 'N/file', 'N/error'], function (render, record, file, error) {

    var exports = {};

    function _getPurchaseOrderPDFContent(poId) {
        try {
            // Load the purchase order record
            var purchaseOrderRecord = record.load({
                type: record.Type.PURCHASE_ORDER,
                id: poId,
                isDynamic: true,
            });

            // Generate the PDF
            var pdfFile = render.transaction({
                entityId: poId,
                printMode: render.PrintMode.PDF,
            });

            // Get the content of the file
            return pdfFile.getContents();

        } catch (e) {
            // Handle any errors that may occur
            throw error.create({
                name: 'PDF_GENERATION_FAILED',
                message: 'Failed to generate PDF for PO ID ' + poId + ': ' + e.message,
            });
        }
    }

    function doGet(requestParams) {
        var poId = requestParams.po_id;

        // Validate the input
        if (!poId) {
            throw error.create({
                name: 'INVALID_PO_ID',
                message: 'Purchase Order ID is required',
            });
        }

        // Generate the PDF and get the content
        var pdfContent = _getPurchaseOrderPDFContent(poId);

        // Convert the binary content to a base64 encoded string
        var base64EncodedPDF = encode.convert({
            string: pdfContent,
            inputEncoding: encode.Encoding.UTF_8,
            outputEncoding: encode.Encoding.BASE_64
        });

        // Return the base64 encoded string
        return { pdfBase64: base64EncodedPDF };
    }

    // Assign functions to 'exports' for the RESTlet entry points
    exports.get = doGet;

    // Return the exports object to register the functions for NetSuite to call
    return exports;
});
