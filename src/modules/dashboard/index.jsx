import { Button } from 'antd'

export const DashboardView = () => {
    return (
        <div className='contenedor_main'>
            <div className='container'>
                <div
                    className='d-flex justify-content-between align-items-center mb-3'
                    style={{ margin: '10px 20px' }}
                >
                    <h1 className='_title' style={{ marginBottom: '0 important' }}>
                        Dashboard
                    </h1>
                    <Button type='primary'>
                        Reporte
                    </Button>

                </div>
            </div>
        </div>
    )
}
