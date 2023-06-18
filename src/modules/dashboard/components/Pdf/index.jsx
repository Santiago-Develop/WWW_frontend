import React from 'react'
import { Document, Page, Text } from '@react-pdf/renderer';

export const ReportPdf = () => {
    return (
        <Document>
            <Page>
                <Text>Contenido del reporte en formato PDFdfasfs</Text>
            </Page>
        </Document>
    );
}
