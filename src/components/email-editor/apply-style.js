export const applyStyle = (type, selectedText) => {
  let formatText = selectedText;

  switch (type) {
    case "bold":
      return (formatText = "<b>" + selectedText + "</b>");
    // break;
    case "italic":
      return (formatText = "<i>" + selectedText + "</i>");
    // break;
    case "underline":
      return (formatText = "<u>" + selectedText + "</u>");
    // break;
    default:
      return (formatText = selectedText);
  }
};
