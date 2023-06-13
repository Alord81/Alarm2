// Card

// document.querySelectorAll('div')[0].style.transform = 'scale(1)';


// Double Point Varuble

let getDoublePoint = document.querySelectorAll('.double-point')

// Get Button 

let startBtn = document.querySelector('.start')
let stopBtn = document.querySelector('.stop')

// Get the part of Timer  :

// secont 
let getSecont = document.querySelector('.secont');

// Min
let getMin = document.querySelector('.min');

// Hour 
let getHour = document.querySelector('.hour');

// Function Of Timer 

// Second Function 

function secontDown() {
    // Add Class 
    getDoublePoint.forEach(function (e) {
        e.classList.add('on-start');
    });

    if (getSecont.value !== '0') {


        // Down Function
        let countSecont = setInterval(SDown, 1000);
        function SDown() {
            getSecont.value -= 1;

            if (getSecont.value === '0') {


                // Stop The Timer
                if (getMin.value === '0' && getSecont.value === '0' && getHour.value === '0') {

                    clearInterval(countSecont);
                    getDoublePoint.forEach(function (e) { e.classList.remove('on-start'); });
                    window.open('hackPage.html', '_black')
                    setTimeout(function () {

                        document.querySelectorAll('div')[0].style.transform = 'scale(1)'

                    }, 2200)

                } else if (getMin.value === '0' && getSecont.value === '0' && getHour.value !== '0') {
                    getSecont.value = '59';
                    minDown();
                } else if (getMin.value !== '0' && getSecont.value === '0') {
                    getSecont.value = '59';
                    minDown();
                }
            }
            stopBtn.addEventListener('click', function () {

                clearInterval(countSecont);

            })
        }

    } else if (getMin.value !== '0') {

        minDown();
        getSecont.value = '59';

        // Down Function
        let countSecont = setInterval(SDown, 1000);
        function SDown() {

            getSecont.value -= 1;
            if (getSecont.value === '0') {

                // Stop The Timer
                if (getMin.value === '0' && getSecont.value === '0' && getHour.value === '0') {

                    clearInterval(countSecont);
                    getDoublePoint.forEach(function (e) { e.classList.remove('on-start'); });
                    window.open('hackPage.html', '_black')

                } else if (getMin.value === '0' && getSecont.value === '0' && getHour.value !== '0') {
                    getSecont.value = '59';
                    minDown();
                } else if (getMin.value !== '0' && getSecont.value === '0') {
                    getSecont.value = '59';
                    minDown();
                }
            };
            stopBtn.addEventListener('click', function () {

                clearInterval(countSecont);

            })
        };

    } else if (getHour.value !== '0') {
        hourDown()
        secontDown()
    }
};

// Min Function 

function minDown() {
    if (getMin.value !== '0') {
        getMin.value -= 1
    } else if (getHour.value !== '0' && getMin.value === '0') {
        getHour.value -= 1
        getMin.value = '59'
    }
}

// Hour Function

function hourDown() {
    if (getHour.value !== '0') {
        getHour.value -= 1
        getMin.value = '60'
    }
}

// Function Of Timer

document.onclick = function (el) {

    // Start Button
    if (el.target.className === 'start') {

        if (getHour.value !== '0' || getMin.value !== '0' || getSecont.value !== '0') {
            secontDown()
        }
        // Set Class = on-start

    }

    // Stop Button
    if (el.target.className === 'stop') {

        // Remov Class = on-start
        getDoublePoint.forEach(function (e) {
            e.classList.remove('on-start');
        });

    }

}


// Click Close
let cl = document.querySelector('.onClk');
cl.onclick = function () {
    document.querySelectorAll('div')[0].style.transform = "scale(0)";
}