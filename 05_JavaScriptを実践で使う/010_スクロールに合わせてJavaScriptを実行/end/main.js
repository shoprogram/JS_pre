const child = document.querySelector('.child');
// classを取得
const cb = function(entries, observer) {
    // IntersectionObserverに渡すcallback関数設定
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('inview');

            // observer.unobserve(entry.target);
            // ↑これはentry.target(この場合はchild)が入ってくることによって監視を終了する。その後発火することはない。
        } else {
            entry.target.classList.remove('inview');
        }
    });
    // alert('intersecting');
}
const options = {
    root: null,
    // あまり使わない
    rootMargin: "-300px 0px",
    // 交差対象の範囲を設定する
    threshold: [0, 0.5, 1]
    // 要素のどこから発火するか設定する(0が先頭、1が末尾)
};
const io = new IntersectionObserver(cb, options);
io.observe(child);
