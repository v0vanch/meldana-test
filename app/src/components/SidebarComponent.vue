<script setup>
import { sidebar } from "@/stores/sidebar";
</script>

<template>
  <div class="sidebar" :class="{ collapsed: sidebar.collapsed }">
    <div
      class="navigation__section"
      v-for="item in navigationData"
      :key="item.index"
    >
      <div class="section-header">
        {{ item.header }}
      </div>

      <span
        
        v-for="children in item.children"
        :key="children.index"
      >
        <router-link class="navigation-link" :to="children.url">
          <div class="navigation-icon">
            <img :src="children.icon" :alt="children.icon" />
          </div>
          <div class="navigation-title">
            {{ children.title }}
          </div>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import DevicesIcon from "../assets/icons/sidebar/devices.svg";
import StructureSchemeIcon from "../assets/icons/sidebar/structure-scheme.svg";
import MonitoringIcon from "../assets/icons/sidebar/monitoring.svg";
import StaffIcon from "../assets/icons/sidebar/staff.svg";
import PassOfficeIcon from "../assets/icons/sidebar/pass-office.svg";
import ReportsIcon from "../assets/icons/sidebar/reports.svg";
import AdministrationIcon from "../assets/icons/sidebar/administration.svg";
import SystemSettingsIcon from "../assets/icons/sidebar/system-settings.svg";

const NavigationTree = [
  {
    header: "Контроль доступа. Учет времени",
    children: [
      {
        title: "Устройства",
        icon: DevicesIcon,
        url: "/",
      },
      {
        title: "Структурная схема. Зоны",
        icon: StructureSchemeIcon,
        url: "/zones",
      },
      {
        title: "Мониторинг",
        icon: MonitoringIcon,
        url: "",
      },
      {
        title: "Персонал",
        icon: StaffIcon,
        url: "",
      },
      {
        title: "Бюро пропусков",
        icon: PassOfficeIcon,
        url: "",
      },
      {
        title: "Отчеты",
        icon: ReportsIcon,
        url: "",
      },
    ],
  },
  {
    header: "Администрирование",
    children: [
      {
        title: "Администрирование",
        icon: AdministrationIcon,
        url: "",
      },
    ],
  },
  {
    header: "Системные настройки",
    children: [
      {
        title: "Системные настройки",
        icon: SystemSettingsIcon,
        url: "",
      },
    ],
  },
];

export default {
  name: "SidebarComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      navigationData: NavigationTree,
    };
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  padding: 14px 0;
  width: 294px;
  height: calc(100vh - $headerHeight);
  flex-shrink: 0;
}
.collapsed.sidebar {
  width: 72px;
}

.section-header {
  padding: 10px 24px 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: $grey2;
}
.collapsed .section-header {
  font-size: 0;
}

.navigation-link {
  padding: 12px 24px;
  height: 48px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: $grey1;
  }
}

.navigation-icon {
  margin-right: 24px;
  width: 24px;
  height: 24px;
}
.collapsed .navigation-icon {
  margin-right: 0;
}

.navigation-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}
.collapsed .navigation-title {
  display: none;
}
</style>
