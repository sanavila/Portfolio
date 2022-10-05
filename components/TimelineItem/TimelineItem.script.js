export const Script = {
  props: {
    title: {
      type: String
    },
    dateTitle: {
      type: Date
    },
    remainTime: {
      type: String,
      default: null
    },
    stepValue: {
      type: String,
      default: ""
    },
    statusColor: {
      type: String,
      default: "default"
    },
    statusSize: {
      type: String,
      default: "is-small"
    },
    statusIcon: {
      type: String,
      default: "checkbox-blank-circle"
    },
    statusIconColor: {
      type: String,
      default: "is-white"
    },
    hideProgressLine: {
      type: Boolean,
      default: false
    }
  }
};
