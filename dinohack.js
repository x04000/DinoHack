function menu() {
  console.log("DinoHack Menu 1.0 | by x04000");
  var menu = prompt("[DinoHack Menu 1.0] \n 1. GodMode \n 2. SpeedHack \n 3. JumpHack \n 4. ScoreHack \n 5. Crash");
  if (menu == "1") {
    var godmenu = prompt("[GodMode] \n 1. Turn ON \n 2. Turn OFF");
    if (godmenu == "1") {
      Runner.prototype.gameOver = function(){};
      console.log("DinoHack 1.0 -> GodMode tunned on")
    }
    if (godmenu == "2") {
      Runner.prototype.gameOver = mortalmode;
      console.log("DinoHack 1.0 -> GodMode tunned off")
    }
  }
  if (menu == "2") {
    var currentspeed = Runner.instance_.currentSpeed
    var speedmenu = prompt("[SpeedHack] \n Set your custom speed (current "+currentspeed+"):");
    Runner.instance_.setSpeed(speedmenu)
    console.log("DinoHack 1.0 -> The dino speed has been changed to "+speedmenu+" (old speed = "+currentspeed+")")
  }
  if (menu == "3") {
    var jumpmenu = prompt("[JumpHack] \n Set your custom jump (defaut is 10):")
    Runner.instance_.tRex.setJumpVelocity(jumpmenu)
    console.log("DinoHack 1.0 -> The dino jump has been changed to "+jumpmenu)
  }
  if (menu == "4") {
    var scoremenu = prompt("[ScoreHack] \n Set your custom score:")
    Runner.instance_.distanceRan = scoremenu / Runner.instance_.distanceMeter.config.COEFFICIENT
  }
  if (menu == "5") {
    Runner.instance_.setSpeed("ñ")
    alert("💀 Game destroyed by DinoHack 1.0 💀")
    console.log("💀 Game destroyed by DinoHack 1.0 💀")
  }
}
function m() {
  menu();
}
var mortalmode = Runner.prototype.gameOver
console.log("DinoHack Menu 1.0 Sucessfully Injected | Have fun :)");
console.log("by x04000");
