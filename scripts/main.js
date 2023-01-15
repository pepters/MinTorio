Events.on(UnitDestroyEvent, event => {
  // display toast on top of screen when the unit was a player
  if(event.unit.isPlayer()){
    Vars.ui.hudfrag.showToast("Pathetic.");
  }
})

Events.on(WorldLoadBeginEvent, event => {
  // display toast on top of screen when the unit was a player
    const myDialog = new BaseDialog("Dialog Title");
  // Add "go back" button
  myDialog.addCloseButton();
  // Add text to the main content
  myDialog.cont.add("Goodbye.");
  // Show dialog
  myDialog.show();
})
