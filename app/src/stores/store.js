import { ref, computed, reactive } from "@vue/reactivity";
import { createDevice, deleteDevice, getDevices, updateDevice } from "@/services/deviceApi";
import { getZones } from "@/services/zoneApi";

const zones = ref([]);
const devices = ref([]);

export const deviceFilter = reactive({
    labelAndIp: '',
    zoneId: 'all',
    type: 'all',
});

export const loadDevicesData = async () => {
    zones.value = await getZones();
    devices.value = await getDevices();
};

export const deviceList = computed(() =>
    devices.value
        .filter((device) => {
            if (deviceFilter.labelAndIp !== '' &&
                !(device.label.toLowerCase().includes(deviceFilter.labelAndIp.toLowerCase()) ||
                    device.ipaddress.includes(deviceFilter.labelAndIp))
            ) return false;
            if (deviceFilter.type !== 'all' && deviceFilter.type !== device.type) return false;
            if (deviceFilter.zoneId !== 'all' && deviceFilter.zoneId !== device.id_control_zones) return false;

            return true;
        })
        .map((device) => ({
            id: device.id,
            type: device.type,
            label: device.label,
            accessPoint: device.accesspoint,
            IPAddress: device.ipaddress,
            port: device.port,
            state: device.state,
            zoneId: device.id_control_zones,
            zone: zones.value.find((zone) => zone.id === device.id_control_zones)?.name,
            login: device.login,
            passwd: device.passwd,
            token: device.token,
        }))
);

export const zoneTree = computed(() => {
    const paths = {};
    const tree = [];
    for (const zone of zones.value) {
        const path = paths[zone.id_sub_zones];

        const zoneNode = {
            id: zone.id,
            type: zone.type,
            label: zone.name,
            children: []
        };

        if (!path) {
            paths[zone.id] = [tree.length];
            tree.push(zoneNode);
        } else {
            let parent = tree[path[0]];
            for (let i = 1; i < path.length; i++) parent = parent.children[path[i]];
            paths[zone.id] = [...path, parent.children.length];
            parent.children.push(zoneNode);
        }
    }
    return tree;
});

export const deviceTree = computed(() => {
    const paths = {};
    const tree = [];
    for (const zone of zones.value) {
        const path = paths[zone.id_sub_zones];

        const zoneNode = {
            id: zone.id,
            type: zone.type,
            label: zone.name,
            children: []
        };

        if (!path) {
            paths[zone.id] = [tree.length];
            tree.push(zoneNode);
        } else {
            let parent = tree[path[0]];
            for (let i = 1; i < path.length; i++) parent = parent.children[path[i]];
            paths[zone.id] = [...path, parent.children.length];
            parent.children.push(zoneNode);
        }
    }
    for (const device of devices.value) {
        const path = paths[device.zoneId];

        const deviceNode = {
            ...device,
            isDevice: true,
        };

        if (!path) {
            tree.push(deviceNode);
        } else {
            let parent = tree[path[0]];
            for (let i = 1; i < path.length; i++) parent = parent.children[path[i]];
            parent.children.push(deviceNode);
        }
    }
    return tree;
});

export const addDeviceData = (device) => {
    createDevice(device)
    .then((res) => {
        devices.value.push(res);
    });
};

export const updateDeviceData = (device) => {
    updateDevice(device)
    .then((res) => {
        const index = devices.value.findIndex((item) => item.id === res.id);
        if (~index) devices.value[index] = res;
    });
};

export const deleteDeviceData = (id) => {
    deleteDevice(id)
    .then((res) => {
        const index = devices.value.findIndex((item) => item.id === res);
        if (~index) devices.value.splice(index, 1);
    });
};