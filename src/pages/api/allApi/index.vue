<template>
<div>
  <a-tabs v-model="editableTabsValue" type="editable-card" editable @edit="handleTabsEdit">
  <a-tab-pane
    :key="item.name"
    v-for="(item, index) in editableTabs"
    :tab="item.title"
    :name="item.name"
  >{{item.content}}
  </a-tab-pane>
</a-tabs>
</div>

</template>
<script>
export default {
  data() {
    return {
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "123"
        },
        {
          title: "Tab 2",
          name: "2",
          content: "456"
        }
      ],
      tabIndex: 2
    };
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content"
        });
        this.editableTabsValue = newTabName;
      }

      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
};
</script>
