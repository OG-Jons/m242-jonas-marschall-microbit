function exercise4(x: number, y: number, delay: number): void {
    led.plot(x, y);
    basic.pause(delay);
    led.unplot(x, y);
    basic.pause(delay);
}

basic.forever(function () {
    exercise4(0, 0, 1000);
})

basic.forever(function () {
    exercise4(4, 4, 100);
})