import { useEffect, useState } from 'react'
import { SmileOutlined, ClockCircleOutlined, CheckCircleOutlined, NotificationOutlined } from '@ant-design/icons';
import { Image, Timeline } from 'antd';
import { STATES } from '../../../../utils/enums';
import moment from 'moment';
import 'moment/locale/es';

export const TimelineUpdate = ({ updates, data }) => {
    moment.locale('es');
    const [items, setItems] = useState(false)
    const mode = "left"
    const itemsObj = {
        1: {
            label: "x",
            color: 'green', //Requerido
            dot: <SmileOutlined />,
            children: (""),

        },
        2: {
            label: "x",
            color: '#00CCFF', //Asignado
            dot: <NotificationOutlined />,
            children: (""),

        },
        3: {
            label: "x",
            color: 'red', //Recogido
            dot: <ClockCircleOutlined />,
            children: (""),

        },
        4: {
            label: "x",
            color: 'darkgray', //Entregado
            dot: <CheckCircleOutlined />,
            children: (""),
        },
    }

    const createItem = () => {
        const items = updates.map(update => {
            const item = { ...itemsObj[update.state] }
            const fechaOriginal = update.current_date_time
            const fechaFormateada = moment(fechaOriginal).format('LLL');
            item.label = fechaFormateada
            item.state = update.state

            item.children = STATES[update.state] === "Requerido"
                ?
                "El servicio fue solicitado"
                :
                !!update.photo ?
                    (
                        <>
                            <span style={{ margin: '0 10px 0 0' }}>
                                {update.description}
                            </span>
                            <Image
                                width={30}
                                src={`data:image/png;base64,${update.photo}`}
                            />
                        </>
                    )
                    : update.description

            return item
        })

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
