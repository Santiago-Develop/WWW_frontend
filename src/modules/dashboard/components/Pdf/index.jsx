import { Document, Page, Text, View } from '@react-pdf/renderer';

export const ReportPdf = ({ data, headers, isCustomer }) => {
    
    return (
        <Document>
            <Page size="A4" orientation="landscape">
                <View style={{ margin: '15px' }}>

                    <View style={{ textAlign: 'center', margin: '15px 0' }}>
                        <Text style={{ fontWeight: 'bold' }}>Reporte de pedidos de {isCustomer ? data[0].customer : data[0].messenger} entre {headers.months[0]} y {headers.months[1]}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', borderBottom: 1, alignItems: 'center', margin: '5px' }}>
                        <Text style={{ width: '14.2%', fontWeight: 'bold' }}>Código</Text>
                        <Text style={{ width: '14.2%', fontWeight: 'bold' }}>Cantidad</Text>
                        <Text style={{ width: '14.2%', fontWeight: 'bold' }}>Transporte</Text>
                        <Text style={{ width: '14.2%', fontWeight: 'bold' }}>Trayecto</Text>
                        <Text style={{ width: '14.2%', fontWeight: 'bold' }}>Cliente</Text>
                        <Text style={{ width: '14.2%', fontWeight: 'bold' }}>Mensajero</Text>
                        <Text style={{ width: '14.2%', fontWeight: 'bold' }}>Estado</Text>
                    </View>
                    {data.map((item, index) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: '5px' }} key={index}>
                            <Text style={{ width: '14.2%', fontSize: '12px' }}>{item.code}</Text>
                            <Text style={{ width: '14.2%', fontSize: '12px' }}>{item.amount}</Text>
                            <Text style={{ width: '14.2%', fontSize: '12px' }}>{item.transport}</Text>
                            <Text style={{ width: '14.2%', fontSize: '12px' }}>{item.journey}</Text>
                            <Text style={{ width: '14.2%', fontSize: '12px' }}>{item.customer}</Text>
                            <Text style={{ width: '14.2%', fontSize: '12px' }}>{item.messenger}</Text>
                            <Text style={{ width: '14.2%', fontSize: '12px' }}>{item.status}</Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
}
