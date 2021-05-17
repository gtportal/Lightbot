/*jsl:option explicit*/
/*jsl:import lightbot.model.game.js*/

$(document).ready(function() {
  $("div#levelCompleteDialog").dialog({
    draggable: false,
    autoOpen: false,
    modal: true,
    width: 320,
    height: 220,
    stack: false,
    resizable: false,
    position: ['middle',140],
    close: function() {
      lightBot.ui.showLevelSelectScreen();
    },
    buttons: {
      Ok: function() {
        $( this ).dialog( "close" );
      }
    }
  });

  $("div#achievementDialog").dialog({
    draggable: false,
    autoOpen: false,
    modal: true,
    width: 320,
    height: 220,
    stack: true,
    resizable: false,
    position: ['middle',140],
    close: function() {
      lightBot.achievements.display(); // display the next achievement if available
    },
    buttons: {
      Ok: function() {
        $( this ).dialog( "close" );
      }
    }
  });
});
