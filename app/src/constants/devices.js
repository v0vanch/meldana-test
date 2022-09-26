export const DeviceStateTransformer = {
    connected: {
        text: 'Подключено',
        color: '#27AE60'
    },
    disconnected: {
        text: 'Отключено',
        color: '#EB5757'
    },
}

export const TreeDeviceList = [
    {
        id: 1,
        type: 'company',
        label: 'ООО “Рога и копыта”',
        root: true,
        children: [
            {
                id: 2,
                type: 'folder',
                label: 'Парковка',
                children: [
                    {
                        id: 3,
                        type: 'lock',
                        label: 'Шлагбаум',
                        children: [
                            {
                                id: 4,
                                type: 'controller',
                                label: 'Контроллер',
                                IPAddress: '192.167.23.45',
                                port: 80,
                                zone: 'Шлагбаум',
                                state: DeviceStateTransformer['connected'],
                                isDevice: true,
                            },
                            {
                                id: 5,
                                type: 'camera',
                                label: 'Камера',
                                port: 80,
                                zone: 'Шлагбаум',
                                IPAddress: '192.167.23.45',
                                state: DeviceStateTransformer['connected'],
                                isDevice: true,
                            },
                        ]
                    }
                ]
            },
            {
                id: 6,
                type: 'folder',
                label: '0-й этаж',
                children: [
                    {
                        id: 7,
                        type: 'folder',
                        label: 'Парковка',
                        children: [
                            {
                                id: 8,
                                type: 'lock',
                                label: 'Ворота',
                                children: [
                                    {
                                        id: 9,
                                        type: 'controller',
                                        label: 'Контроллер',
                                        IPAddress: '192.167.23.45',
                                        port: 80,
                                        zone: 'Шлагбаум',
                                        state: DeviceStateTransformer['connected'],
                                        isDevice: true,
                                    },
                                    {
                                        id: 10,
                                        type: 'camera',
                                        label: 'Камера',
                                        IPAddress: '192.167.23.45',
                                        port: 80,
                                        zone: 'Шлагбаум',
                                        state: DeviceStateTransformer['disconnected'],
                                        isDevice: true,
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        id: 11,
                        type: 'folder',
                        label: 'Хозблок',
                        children: [
                            {
                                id: 12,
                                type: 'lock',
                                label: 'Дверь',
                                children: [
                                    {
                                        id: 13,
                                        type: 'controller',
                                        label: 'Контроллер',
                                        port: 80,
                                        zone: 'Шлагбаум',
                                        IPAddress: '192.167.23.45',
                                        state: DeviceStateTransformer['connected'],
                                        isDevice: true,
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
]

export const TreeZoneList = [
    {
        type: 'company',
        label: 'ООО “Рога и копыта”',
        root: true,
        children: [
            {
                type: 'folder',
                label: 'Парковка',
            },
            {
                type: 'folder',
                label: '0-й этаж',
                children: [
                    {
                        type: 'folder',
                        label: 'Парковка',
                    },
                    {
                        type: 'folder',
                        label: 'Хозблок',
                    }
                ]
            },
            {
                type: 'folder',
                label: '1-й этаж',
                children: [
                    {
                        type: 'folder',
                        label: 'Коридор',
                    },
                    {
                        type: 'company',
                        label: 'ООО “Рога”',
                    },
                    {
                        type: 'company',
                        label: 'ООО “Копыта”',
                    }
                ]
            },
            {
                type: 'folder',
                label: '2-й этаж',
            },
            {
                type: 'folder',
                label: '3-й этаж',
            },
        ]
    },
]

export const DeviceList = [
    {
        id: 1,
		type: 'Контроллер',
        label: 'Контроллер',
        zone: 'Шлагбаум',
        accessPoint: 'Точка доступа',
        IPAddress: '192.167.23.45',
        port: '3000',
        state: DeviceStateTransformer['connected'],
    },
    {
		id: 2,
        type: 'Камера',
        label: 'Камера',
        zone: 'Ворота',
        accessPoint: 'Точка доступа',
        IPAddress: '192.167.23.45',
        port: '3000',
        state: DeviceStateTransformer['connected'],
    },
    {
		id: 3,
        type: 'УВР. Терминал распознавания лиц. Контроль температуры',
        label: 'УВР. Терминал распознавания лиц. Контроль температуры',
        zone: 'Коридор',
        accessPoint: 'Точка доступа',
        IPAddress: '192.167.23.45',
        port: '3000',
        state: DeviceStateTransformer['disconnected'],
    },
    {
		id: 4,
        type: 'Контроллер',
        label: 'Контроллер',
        zone: 'Дверь',
        accessPoint: 'Точка доступа',
        IPAddress: '192.167.23.45',
        port: '3000',
        state: DeviceStateTransformer['connected'],
    },
    {
		id: 5,
        type: 'Камера',
        label: 'Камера',
        zone: 'Ресепшн',
        accessPoint: 'Точка доступа',
        IPAddress: '192.167.23.45',
        port: '3000',
        state: DeviceStateTransformer['disconnected'],
    },
    {
		id: 6,
        type: 'УВР. Терминал распознавания лиц. Контроль температуры',
        label: 'УВР. Терминал распознавания лиц. Контроль температуры',
        zone: 'КПП турникет',
        accessPoint: 'Точка доступа',
        IPAddress: '192.167.23.45',
        port: '3000',
        state: DeviceStateTransformer['connected'],
    },
    {
		id: 7,
        type: 'Контроллер',
        label: 'Контроллер',
        zone: 'Шлагбаум',
        accessPoint: 'Точка доступа',
        IPAddress: '192.167.23.45',
        port: '3000',
        state: DeviceStateTransformer['connected'],
    },
    {
		id: 8,
        type: 'Камера',
        label: 'Камера',
        zone: 'Ресепшн',
        accessPoint: 'Точка доступа',
        IPAddress: '192.167.23.45',
        port: '3000',
        state: DeviceStateTransformer['disconnected'],
    },
    {
		id: 9,
        type: 'УВР. Терминал распознавания лиц. Контроль температуры',
        label: 'УВР. Терминал распознавания лиц. Контроль температуры',
        zone: 'Коридор',
        accessPoint: 'Точка доступа',
        IPAddress: '192.167.23.45',
        port: '3000',
        state: DeviceStateTransformer['disconnected'],
    },
]

export const TypeOptions = [
    {
        value: 'all',
        label: 'Все устройства',
    },
    {
        value: 'controllers',
        label: 'Контроллеры',
    },
    {
        value: 'terminals',
        label: 'Терминалы',
    },
    {
        value: 'thermometers',
        label: 'Измерители температуры',
    },
    {
        value: 'breathalyzers',
        label: 'Алкотестеры',
    },
    {
        value: 'metalDetectors',
        label: 'Металлодетекторы',
    },
    {
        value: 'additional',
        label: 'Дополнительные',
    },
]


export const OrgOptions = [
    {
        value: 'all',
        label: 'Все организации',
    },
    {
        value: 'roga&kopita',
        label: 'ООО “Рога и копыта”',
    },
    {
        value: 'kopita',
        label: 'ООО Копыта”',
    },
    {
        value: 'roga',
        label: 'ООО “Рога',
    }
]


export const ZoneOptions = [
    {
        value: 'all',
        label: 'Все зоны',
    },
    {
        value: '1',
        label: 'Шлагбаум',
    },
    {
        value: '2',
        label: 'Ворота',
    },
    {
        value: '3',
        label: 'Коридор',
    },
    {
        value: '4',
        label: 'Дверь',
    },
    {
        value: '5',
        label: 'Ресепшн',
    },
    {
        value: '6',
        label: 'КПП турникет',
    },
]