import {ref} from "@vue/reactivity";

export const sidebar = ref({
    collapsed: false,
    toggleSidebar() {
        this.collapsed = !this.collapsed;
    }
});