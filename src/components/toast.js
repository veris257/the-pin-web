
const Toast = {
    start_message: "You have started the purchase process. You will have to complete it within the next five minutes or else the process will restart.",
    msg1: "Be careful! You only have 4 minutes remaining.",
    msg2: "Be careful! You only have 3 minutes remaining.",
    msg3: "Be careful! You only have 2 minutes remaining.",
    msg4: "Be careful! You only have 1 minute remaining.",
    reset_message: "We are sorry! It looks like you couldn't complete the purchase process. You will now have to start over.",

    hideTimeMs: 10000, // 10 seconds
    scheduleIntervalMs: 1000 * 60, // 1 minute
    reloadTimeoutMs: 1000 * 60 * 5,

    init() {
        this.el = document.createElement("div");
        this.el.className = "toast";
        document.body.appendChild(this.el);

        this.schedule();
    },
    
    show(message){
        this.el.textContent = message;
        this.el.classList.add('toast--visible');

        setTimeout(() => {
            this.el.classList.remove('toast--visible');
        }, this.hideTimeMs);
    },

    schedule(){ 
        const msg_array = [
            this.start_message,
            this.msg1,
            this.msg2,
            this.msg3,
            this.msg4,
            this.reset_message
        ];

        msg_array.forEach((msg, i) => {
            const timeoutInMiliseconds = this.scheduleIntervalMs * i // ms * s * index
            setTimeout(() => {
                this.show(msg)

                const isLastElement = i === msg_array.length - 1
                if (isLastElement) {
                    this.waitAndReloadPage()
                }
            }, timeoutInMiliseconds)
        })
    },

    waitAndReloadPage() {
        setTimeout(() => location.reload(), this.reloadTimeoutMs)
    }
};


function onClickCheck1() {
    timeAdd = (new Date()).getTime();
    return timeAdd;
};
function onClickCheck2() {
    timeBuy = (new Date()).getTime();
    return timeBuy;
};


function timer(){
    
    const purchase_time = (timeBuy - timeAdd);
    const m = Math.floor(purchase_time/60000);
    const s = Math.floor(purchase_time/1000 );
    if (s<10){
        document.getElementById("purchase_time").innerHTML = "0" + (m) + `:0` + s;
    } else {
        document.getElementById("purchase_time").innerHTML = "0" + (m) + `:` + s;
    }
};
