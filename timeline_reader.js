/** Mastodon(v1.4.1)タイムラインのトゥートを監視するだけのやつ
 * Tempermonkeyやブックマークレットに組み込んでお使いください。
 */

var observer = new MutationObserver((ms) => {
    ms.forEach((m) => {
        m.addedNodes.forEach((n) => {
            if(!/status-public|status-unlisted|status-private/.test(n.className)) return;
            var t = n.querySelector('.status__content').textContent;
            var msg =
                /ぬるぽ|ヌルポ|ﾇﾙﾎﾟ|nullpo/.test(t) ? 'ぬるぽ' :
                /ちくわ|明神/.test(t)               ? 'ちくわ' :
                /(なんでも|何でも)[すし]/.test(t)   ? 'なんでも' :
                /しんかこ|新囲/.test(t)             ? 'しんかこ' : '';
            if(msg !== '') {
                console.warn('%s: %s', msg, t);
                var s = new SpeechSynthesisUtterance(msg);
                s.rate = 1.3;
                s.lang = 'ja-JP';
                speechSynthesis.speak( s );
            } else {
                console.log('%s: %s', msg, t);
            }
        });
    });
});
observer.observe(document.querySelectorAll(".columns-area")[0], {childList: true, subtree: true});