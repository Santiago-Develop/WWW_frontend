import { getDataExcel } from "./getDataExcel";
import { ROLES } from "../utils/enums";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export const handleDownloadExcel = (data, formReport) => {

  const dataHeaders = getDataExcel([...data]);

  const worksheet = XLSX.utils.json_to_sheet(dataHeaders);

  const workbook = XLSX.utils.book_new();

  // Definir el ancho de las columnas
  const columnWidths = [
    { wch: 15 },
    { wch: 15 },
    { wch: 15 },
    { wch: 30 },
    { wch: 15 },
    { wch: 15 },
    { wch: 15 },
  ];
  worksheet["!cols"] = columnWidths;

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    `${formReport.months[0]}-${formReport.months[1]}`,
  );
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
  const dataInfo = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(
    dataInfo,
    `Reporte-${formReport.role == ROLES.CUSTOMER ? data[0].customer : data[0].messenger}-(${formReport.months[0]
    }-${formReport.months[1]}).xlsx`,
  );
};
