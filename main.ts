function exercise3 (name: string): void {
    basic.showString(name)
    basic.pause(500)
}

basic.forever(function () { 
    exercise3('JONAS');
})
