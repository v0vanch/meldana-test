import zones from "../../../zones.json";

export const getZones = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(zones.items);
        }, 500);
    });
}