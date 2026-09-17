module.exports = (cb) => {
    const t1 = performance.now();
    console.log(cb());
    const t2 = performance.now();
    console.log("It took:", (t2 - t1) / 1000, "second(s)");
}