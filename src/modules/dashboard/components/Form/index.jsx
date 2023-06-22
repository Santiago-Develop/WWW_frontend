import { Button, DatePicker, Drawer, Empty, Form, Radio, Result, Select, Spin, Table } from "antd";
import { openNotificationWithIcon } from "../../../../helpers/openNotificationWithIcon";
import { handleDownloadExcel } from "../../../../helpers/handleDownloadExcel";
import { FilePdfOutlined, FileExcelOutlined, FileSearchOutlined } from "@ant-design/icons";
import { REPORT_COLUMNS, ROLES } from "../../../../utils/enums";
import { getReports } from "../../../../helpers/getReports";
import { getUsers } from "../../../../helpers/getUsers";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import { ReportPdf } from "../Pdf";
import { useState } from "react";
import "./style.scss";

const { RangePicker } = DatePicker;

export const ReportForm = ({ openDrawer, setOpenDrawer }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [loadingOptionsUser, setLoadingOptionsUser] = useState(false);
  const [optionsUser, setOptionsUser] = useState(false);
  const [formReport, setFormReport] = useState({
    role: null,
    months: null,
    user: null,
  });

  const handleChangeRange = (date, dateString) => {
    setFormReport({
      ...formReport,
      months: dateString,
    });
  };

  const handleChangeRole = async (e) => {
    setOptionsUser(false);
    setLoadingOptionsUser(true);

    setFormReport({
      ...formReport,
      role: e.target.value,
    });
    const data = await getUsers(e.target.value, null, null, null, false);
    let options = [];

    data.forEach((user) => {
      options.push({
        value: user.user_id,
        label: user.username,
      });
    });

    setOptionsUser(options);
    setLoadingOptionsUser(false);
  };

  const handleChangeUser = (value) => {
    setFormReport({
      ...formReport,
      user: value,
    });
  };

  const handleReport = async () => {
    setOpenDrawer(false);
    setData(false);
    setLoading(true);
    await getReports(formReport, setData, setLoading);
  };

  return (
    <div>
      <Drawer
        title="Filtrar reporte"
        width={300}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Form
          form={form}
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
            label="Rango"
            name="months"
            className="d-flex flex-column"
            rules={[{ required: true, message: "Este campo es obligatorio" }]}
          >
            <RangePicker
              style={{ width: "80%" }}
              picker="month"
              placeholder={["Mes inicial", "Mes final"]}
              onChange={handleChangeRange}
            />
          </Form.Item>

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
              loading={loadingOptionsUser ? true : false}
              placeholder="Selecciona al cliente/mensajero"
              onChange={handleChangeUser}
              optionLabelProp="label"
              options={optionsUser ? optionsUser : []}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Filtrar
          </Button>
        </Form>
      </Drawer>


      {!data && !loading ?
        (
          <div>
            <Result
              className="centrado"
              icon={<FileSearchOutlined />}
              title="Bienvenido al módulo de reportes"
              subTitle="Genera uno desde el botón de arriba"
            />
          </div>
        )
        :
        !data && loading ? (
          <Spin size="large" className="m-4" sty>
            <div className="content" style={{ height: "50px" }} />
          </Spin>
        ) : !!data && data.length < 1 ? (
          <Empty className="m-3" />
        ) : !!data && !openDrawer ? (
          <div style={{ maxHeight: "77vh", overflowY: "auto", padding: "0px 20px 20px" }}>
            <div style={{ margin: "20px 0" }}>
              <div className="d-flex justify-content-end" style={{ margin: "0 0 20px" }}>
                <PDFDownloadLink
                  document={
                    <ReportPdf
                      data={data}
                      headers={formReport}
                      isCustomer={formReport.role == ROLES.CUSTOMER}
                    />
                  }
                  fileName={`Reporte-${formReport.role == ROLES.CUSTOMER ? data[0].customer : data[0].messenger
                    }-(${formReport.months[0]}-${formReport.months[1]}).pdf`}
                >
                  <button className="_button_ pdf" style={{ marginRight: "20px" }}>
                    <FilePdfOutlined style={{ fontSize: "16px", color: "white" }} />
                  </button>
                </PDFDownloadLink>

                <button
                  className="_button_ excel"
                  onClick={() => handleDownloadExcel(data, formReport)}
                >
                  <FileExcelOutlined style={{ fontSize: "16px", color: "white" }} />
                </button>
              </div>
              <Table dataSource={data} columns={REPORT_COLUMNS} />
            </div>
          </div>
        ) : (
          ""
        )}
    </div>
  );
};

ReportForm.propTypes = {
  openDrawer: PropTypes.bool.isRequired,
  setOpenDrawer: PropTypes.func.isRequired,
};
