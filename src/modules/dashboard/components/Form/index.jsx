import { Button, DatePicker, Empty, Form, Radio, Spin, Table } from "antd";
import { useState } from "react";
import { openNotificationWithIcon } from "../../../../helpers/openNotificationWithIcon";
import { resetForm } from "../../../../helpers/resetForm";
import { getReports } from "../../../../helpers/getReports";
import { REPORT_COLUMNS, ROLES, ROLES_NAME } from "../../../../utils/enums";
import { FilePdfOutlined, FileExcelOutlined } from '@ant-design/icons';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ReportPdf } from "../pdf";
import './style.scss'

const { RangePicker } = DatePicker;

export const ReportForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);
    const [formReport, setFormReport] = useState({
        role: null,
        months: null,
        user: 2
    })

    const handleChangeRange = (date, dateString) => {
        setFormReport({
            ...formReport,
            months: dateString
        })
    };

    const handleChangeRole = (e) => {
        setFormReport({
            ...formReport,
            role: e.target.value
        })
    };

    const handleReport = async () => {
        console.log("🚀 ~ file: index.jsx:12 ~ ReportForm ~ formReport:", formReport)
        setLoading(true);
        await getReports(formReport, setData, setLoading)
        console.log("🚀 ~ file: index.jsx:32 ~ handleReport ~ data:", data)
        // resetForm(form)
    };

    return (
        <div>
            <Form
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
                onFinish={handleReport}
                onFinishFailed={() => {
                    const type = "warning";
                    const message = "¡No se pudo completar el registro!";
                    const description = "Algunos campos obligatorios no están diligenciados";
                    openNotificationWithIcon(type, message, description);
                }}
            >
                <Form.Item
                    label="Rol"
                    name="role"
                    className="d-flex flex-column"
                    rules={[{ required: true, message: "Este campo es obligatorio" }]}
                >
                    <Radio.Group onChange={handleChangeRole}>
                        <Radio value="CUSTOMER"> Cliente </Radio>
                        <Radio value="MESSENGER"> Mensajero </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="Rango de meses"
                    name="months"
                    className="d-flex flex-column"
                    rules={[{ required: true, message: "Este campo es obligatorio" }]}>
                    <RangePicker picker="month" onChange={handleChangeRange} />
                </Form.Item>
                <Button
                    type="primary"
                    htmlType="submit">
                    Filtrar
                </Button>
            </Form>

            <div>
                {!data && loading
                    ? (
                        <Spin size="large" className="m-4" sty>
                            <div className="content" style={{ height: "50px" }} />
                        </Spin>
                    )
                    : !!data && data.length < 1
                        ?
                        (
                            <Empty className="m-3" />
                        )
                        : !!data ?
                            (
                                <div style={{ margin: '20px 0' }}>
                                    <div className="d-flex justify-content-end" style={{ margin: '20px 0' }}>
                                        <PDFDownloadLink
                                            document={<ReportPdf data={data} headers={formReport} />}
                                            fileName={`Reporte-${ROLES_NAME[formReport.role]}-(${formReport.months[0]}-${formReport.months[1]}).pdf`}
                                        >
                                            <button className="_button_ pdf" style={{ marginRight: '20px' }}>
                                                <FilePdfOutlined style={{ fontSize: '16px', color: 'white' }} />
                                            </button>
                                        </PDFDownloadLink>

                                        <button className="_button_ excel">
                                            <FileExcelOutlined style={{ fontSize: '16px', color: 'white' }} />
                                        </button>
                                    </div>
                                    <Table dataSource={data} columns={REPORT_COLUMNS} pagination={{ pageSize: 10 }} scroll={{ y: 270 }}/>
                                </div>
                            )
                            : ""
                }

            </div>
        </div>
    )
}