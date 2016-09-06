
const DELAY = 1000;

class Horloge {
    constructor(container) {
        this.interval = setInterval(() => {
            let now = new Date();
            container.innerHTML = `${now.getHours()}h${now.getMinutes()}m${now.getSeconds()}`;
        }, DELAY);
    }
}

export default Horloge;
