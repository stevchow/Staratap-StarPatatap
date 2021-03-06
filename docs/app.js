var keyData = {
    q: {
        sound: new Audio('sounds/bubbles.mp3'),
        color: '#1abc9c'
    },
    w: {
        sound: new Audio(
            'sounds/clay.mp3'
        ),
        color: '#2ecc71'
    },
    e: {
        sound: new Audio(
            'sounds/confetti.mp3'
        ),
        color: '#3498db'
    },
    r: {
        sound: new Audio(
            'sounds/corona.mp3'
        ),
        color: '#9b59b6'
    },
    t: {
        sound: new Audio(
            'sounds/dotted-spiral.mp3'
        ),
        color: '#34495e'
    },
    y: {
        sound: new Audio(
            'sounds/flash-1.mp3'
        ),
        color: '#16a085'
    },
    u: {
        sound: new Audio(
            'sounds/flash-2.mp3'
        ),
        color: '#27ae60'
    },
    i: {
        sound: new Audio(
            'sounds/flash-3.mp3'
        ),
        color: '#2980b9'
    },
    o: {
        sound: new Audio(
            'sounds/glimmer.mp3'
        ),
        color: '#8e44ad'
    },
    p: {
        sound: new Audio(
            'sounds/moon.mp3'
        ),
        color: '#2c3e50'
    },
    a: {
        sound: new Audio(
            'sounds/pinwheel.mp3'
        ),
        color: '#f1c40f'
    },
    s: {
        sound: new Audio(
            'sounds/piston-1.mp3'
        ),
        color: '#e67e22'
    },
    d: {
        sound: new Audio(
            'sounds/piston-2.mp3'
        ),
        color: '#e74c3c'
    },
    f: {
        sound: new Audio(
            'sounds/prism-1.mp3'
        ),
        color: '#95a5a6'
    },
    g: {
        sound: new Audio(
            'sounds/prism-2.mp3'
        ),
        color: '#f39c12'
    },
    h: {
        sound: new Audio(
            'sounds/prism-3.mp3'
        ),
        color: '#d35400'
    },
    j: {
        sound: new Audio(
            'sounds/splits.mp3'
        ),
        color: '#1abc9c'
    },
    k: {
        sound: new Audio(
            'sounds/squiggle.mp3'
        ),
        color: '#2ecc71'
    },
    l: {
        sound: new Audio(
            'sounds/strike.mp3'
        ),
        color: '#3498db'
    },
    z: {
        sound: new Audio(
            'sounds/suspension.mp3'
        ),
        color: '#9b59b6'
    },
    x: {
        sound: new Audio(
            'sounds/timer.mp3'
        ),
        color: '#34495e'
    },
    c: {
        sound: new Audio(
            'sounds/ufo.mp3'
        ),
        color: '#16a085'
    },
    v: {
        sound: new Audio(
            'sounds/veil.mp3'
        ),
        color: '#27ae60'
    },
    b: {
        sound: new Audio(
            'sounds/wipe.mp3'
        ),
        color: '#2980b9'
    },
    n: {
        sound: new Audio(
            'sounds/zig-zag.mp3'
        ),
        color: '#8e44ad'
    },
    m: {
        sound: new Audio(
            'sounds/moon.mp3'
        ),
        color: '#2c3e50'
    }

}

var stars = [];

function onKeyDown(event) {
    if (keyData[event.key]) {
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newStars = new Path.Star(point, 5, 21, 40);
        newStars.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
        keyData[event.key].sound.currentTime = 0;
        stars.push(newStars);
    }
}

function onFrame(event) {
    for (var i = 0; i < stars.length; i++) {
        stars[i].scale(2.2);
        stars[i].fillColor.hue += 1;
        if (stars[i].area < 1) {
            stars[i].remove();
            stars.splice(i, 1);
        }
    }
}

var timeoutID;

function setup() {
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);

    startTimer();
}
setup();

function startTimer() {
    // wait 2 seconds before calling goInactive
    timeoutID = window.setTimeout(goInactive, 3000);
}

function resetTimer(e) {
    window.clearTimeout(timeoutID);
    goActive();
}

function goInactive() {
    // do something
    document.querySelector('.instruction').classList.add('instruct');
}

function goActive() {
    // do something
    document.querySelector('.instruction').classList.remove('instruct');
    startTimer();
}