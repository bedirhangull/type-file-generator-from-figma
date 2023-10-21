figma.showUI(__html__, { height: 400, width: 500 });

figma.on("selectionchange", async () => {
    figma.ui.postMessage({
      type: "selection-change",
      isComponentSelected: figma.currentPage.selection.length > 0,
      selectedComponents: figma.currentPage.selection.map((x) => x.name),
    });
  });
  