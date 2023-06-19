import { Button, DatePicker, Empty, Form, Radio, Select, Spin, Table } from "antd";
import { useState } from "react";
import { openNotificationWithIcon } from "../../../../helpers/openNotificationWithIcon";
import { resetForm } from "../../../../helpers/resetForm";
import { getReports } from "../../../../helpers/getReports";
import { REPORT_COLUMNS, ROLES, ROLES_NAME } from "../../../../utils/enums";
import { FilePdfOutlined, FileExcelOutlined } from '@ant-design/icons';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ReportPdf } from "../pdf";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import './style.scss'
import { getDataExcel } from "../../../../helpers/getDataExcel";
import { getUsers } from "../../../../helpers/getUsers";

const { RangePicker } = DatePicker;

export const ReportForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);
    const [loadingOptionsUser, setLoadingOptionsUser] = useState(false);
    const [optionsUser, setOptionsUser] = useState(false);
    const [formReport, setFormReport] = useState({
        role: null,
        months: null,
        user: null
    });

    const handleChangeRange = (date, dateString) => {
        setFormReport({
            ...formReport,
            months: dateString
        })
    };

    const handleChangeRole = async (e) => {
        setOptionsUser(false)
        setLoadingOptionsUser(true);

        setFormReport({
            ...formReport,
            role: e.target.value
        })
        const data = await getUsers(e.target.value, null, null, null, false);
        let options = []

        data.forEach(user => {
            options.push({
                value: user.user_id,
                label: user.username,
            })
        });

        setOptionsUser(options)
        setLoadingOptionsUser(false);

    };

    const handleChangeUser = (value) => {
        setFormReport({
            ...formReport,
            user: value
        })
    };

    const handleReport = async () => {
        setData(false)
        setLoading(true);
        await getReports(formReport, setData, setLoading)
    };

    const handleDownloadExcel = () => {
        const dataHeaders = getDataExcel(data)
        const worksheet = XLSX.utils.json_to_sheet(dataHeaders);
        const workbook = XLSX.utils.book_new();

        // Definir el ancho de las columnas
        const columnWidths = [{ wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 30 }, { wch: 15 }, { wch: 15 }, { wch: 15 }];
        worksheet['!cols'] = columnWidths;


        XLSX.utils.book_append_sheet(workbook, worksheet, `${formReport.months[0]}-${formReport.months[1]}`);
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        const dataInfo = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(dataInfo, `Reporte-${ROLES_NAME[formReport.role]}-(${formReport.months[0]}-${formReport.months[1]}).xlsx`);
    }

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
                    label="Usuario"
                    name="user"
                    className="d-flex flex-column"
                    rules={[{ required: true, message: "Este campo es obligatorio" }]}
                >

                    <Select
                        style={{ width: "80%" }}
                        disabled={!optionsUser ? true : false}
                        loading={loadingOptionsUser ? true : false}
                        placeholder="Selecciona al cliente/mensajero"
                        onChange={handleChangeUser}
                        optionLabelProp="label"
                        options={!!optionsUser ? optionsUser : []}
                    />

                </Form.Item>

                <Form.Item
                    label="Rango de meses"
                    name="months"
                    className="d-flex flex-column"
                    rules={[{ required: true, message: "Este campo es obligatorio" }]}>
                    <RangePicker
                        style={{ width: "80%" }}
                        picker="month"
                        placeholder={['Mes inicial', 'Mes final']}
                        onChange={handleChangeRange} />
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

                                        <button className="_button_ excel" onClick={handleDownloadExcel}>
                                            <FileExcelOutlined style={{ fontSize: '16px', color: 'white' }} />
                                        </button>
                                    </div>
                                    <Table dataSource={data} columns={REPORT_COLUMNS} pagination={{ pageSize: 10 }} scroll={{ y: 270 }} />
                                </div>
                            )
                            : ""
                }

            </div>
        </div>
    )
}
