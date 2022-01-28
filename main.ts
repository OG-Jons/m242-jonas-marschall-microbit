basic.forever(function () {
  const lightLevel: number = input.lightLevel();
    led.plotBarGraph(lightLevel, 255)
    basic.pause(100);
})