class info  {
    constructor(name, after, different, year, sung, time, id) {
        this.name = name;
        this.after = after;
        this.different = different;
        this.year = year;
        this.sung = sung;
        this.time = time;
        this.id = id
    }
}

const music = (n) => {
    n = +prompt(`ixtiyoriy son kiriting`);

    if (!n) {
        alert(`son kiriting`)
        return false;
    };

    for (let i = 1; i <= n; i++) {
        let m = prompt(`${i} - yoqtirgan muzikangizni nomini kiritng`);
        if (Number(m)) {
            alert(`musiqa son bolmaydi`);
        }
        if (m.trim().length <= 3) {
            alert(`musiqani nomi notogri`)
        }
        let a = m.split();
        console.log(a);
          
    };

    return a;
}
console.log(music());