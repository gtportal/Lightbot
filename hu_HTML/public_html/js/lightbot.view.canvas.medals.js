/*jsl:option explicit*/
/*jsl:import lightbot.model.game.js*/

(function() {

  function display(medal) {
    // prepare the level completed dialog
    $('#levelCompleteDialog .medal').removeClass('medal-gold medal-silver medal-bronze');

    switch (medal) {
      case lightBot.medals.gold:
        $('#levelCompleteDialog .medal').addClass('medal-gold');
        $('#levelCompleteDialog .message').html('');
        break;
      case lightBot.medals.silver:
        $('#levelCompleteDialog .medal').addClass('medal-silver');
        $('#levelCompleteDialog .message').html('Az aranyéremhez ' + lightBot.map.getMedals().gold + ' vagy kevesebb utasítással kell teljesíteni a szintet.');
        break;
      case lightBot.medals.bronze:
        $('#levelCompleteDialog .medal').addClass('medal-bronze');
        $('#levelCompleteDialog .message').html('Az ezüstéremhez ' + lightBot.map.getMedals().silver + ' vagy kevesebb utasítással kell teljesíteni a szintet.');
        break;
      case lightBot.medals.noMedal:
        $('#levelCompleteDialog .message').html('A bronzéremhez ' + lightBot.map.getMedals().bronze + ' vagy kevesebb utasítással kell teljesíteni a szintet.');
        break;
      default:
        console.error('Unknown medal "' + medal + '"');
        break;
    }

    $("#levelCompleteDialog .nbrOfInstructions").html(lightBot.bot.getNumberOfInstructions());
    $("#levelCompleteDialog").dialog("open");
  }

  lightBot.medals.display = display;
})();
