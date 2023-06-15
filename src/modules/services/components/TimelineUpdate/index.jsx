import { useEffect, useState } from 'react'
import { SmileOutlined, ClockCircleOutlined, CheckCircleOutlined, NotificationOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import { STATES } from '../../../../utils/enums';
import moment from 'moment';
import 'moment/locale/es';

export const TimelineUpdate = ({ updates, data }) => {
    console.log("🚀 ~ file: index.jsx:6 ~ TimelineUpdate ~ updates:", updates)
    moment.locale('es');
    const [items, setItems] = useState(false)
    const mode = "left"
    const itemsObj = {
        1: {
            label: "x",
            color: 'green', //Requerido
            dot: <SmileOutlined />,
        },
        2: {
            label: "x",
            color: '#00CCFF', //Asignado
            dot: <NotificationOutlined />,
        },
        3: {
            label: "x",
            color: 'red', //Recogido
            dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        },
        4: {
            label: "x",
            color: 'darkgray', //Entregado
            dot: <CheckCircleOutlined />,
        },
    }

    const createItem = () => {
        const items = updates.map(update => {
            const item = itemsObj[update.state]
            const fechaOriginal = update.current_date_time
            const fechaFormateada = moment(fechaOriginal).format('LLL');
            item.label = fechaFormateada

            item.children =
                STATES[update.state] === "Requerido"
                    ? `El servicio fue solicitado`
                    : STATES[update.state] === "Asignado"
                        ? `El servicio fue tomado por: ${data.messenger.name}`
                        : update.description
            return item
        })
        console.log("🚀 ~ file: index.jsx:34 ~ createItem ~ items:", items)
        setItems(items)
    }

    useEffect(() => {
        createItem()
    }, [])


    return (
        <Timeline
            mode={mode}
            items={items}
        />
    )
}
