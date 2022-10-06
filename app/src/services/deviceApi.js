import devices from "../../../device.json";

let lastDeviceId = devices.meta.total;

export const getDevices = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(devices.items);
        }, 500);
    });
}

export const createDevice = (device) => {
    return new Promise((resolve) => {
        const item = {
            ...device,
            id: lastDeviceId + 1,
        };
        setTimeout(() => {
            resolve(item);
        }, 500)
    });
};

export const updateDevice = (device) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(device);
        }, 500)
    });
};

export const deleteDevice = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(id);
        }, 500)
    });
};