import { Button } from "antd";
import { Document, Page, Text, PDFViewer } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';

export const ReportView = () => {

  const handleDownloadPDF = () => {
    const MyDoc = (
      <Document>
        <Page>
          <Text>Content of the PDF report</Text>
        </Page>
      </Document>
    );

    const pdfBlob = new Blob([<PDFViewer>{MyDoc}</PDFViewer>], {
      type: 'application/pdf',
    });

    saveAs(pdfBlob, 'holaaaa.pdf');
  };

  return (
    <div className="contenedor_main">
      <div className="container">
        <div
          className="d-flex justify-content-between align-items-center mb-3"
          style={{ margin: "10px 20px" }}
        >
          <h1 className="_title" style={{ marginBottom: "0 important" }}>
            Reportes
          </h1>
        </div>

        <div className="container">
          <button onClick={handleDownloadPDF}>Imprimir PDF</button>
        </div>

      </div>
    </div>
  );
};
