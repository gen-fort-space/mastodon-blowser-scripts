var tootoo = [
    { hkana: ',',  dkana: '、', to: '’‘’‘’‘' },
    { hkana: '',   dkana: 'ゐ', to: '’‘’’‘' },
    { hkana: '',   dkana: 'ゑ', to: '’‘‘’’' },
    { hkana: 'ｰ',  dkana: 'ー', to: '’‘‘’‘' },
    { hkana: 'ｱｧ', dkana: 'あ', to: '‘‘’‘‘' },
    { hkana: 'ｴｪ', dkana: 'え', to: '‘’‘‘‘' },
    { hkana: 'ｵｫ', dkana: 'お', to: '’‘’’’' },
    { hkana: 'ｷ',  dkana: 'き', to: '‘’‘’’' },
    { hkana: 'ｻ',  dkana: 'さ', to: '‘’‘’‘' },
    { hkana: 'ｼ',  dkana: 'し', to: '‘‘’‘’' },
    { hkana: 'ｽ',  dkana: 'す', to: '‘‘‘’‘' },
    { hkana: 'ｾ',  dkana: 'せ', to: '’‘‘‘’' },
    { hkana: 'ﾃ',  dkana: 'て', to: '’‘’‘‘' },
    { hkana: 'ﾄ',  dkana: 'と', to: '’’‘’’' },
    { hkana: 'ﾋ',  dkana: 'ひ', to: '‘‘’’‘' },
    { hkana: 'ﾐ',  dkana: 'み', to: '’’‘’‘' },
    { hkana: 'ﾒ',  dkana: 'め', to: '‘’’’‘' },
    { hkana: 'ﾓ',  dkana: 'も', to: '‘’’‘’' },
    { hkana: 'ﾕｭ', dkana: 'ゆ', to: '‘’’‘‘' },
    { hkana: 'ﾙ',  dkana: 'る', to: '‘’‘‘’' },
    { hkana: 'ﾝ',  dkana: 'ん', to: '’‘’‘’' },
    { hkana: 'ﾟ',  dkana: '゜', to: '’’‘‘’' },
    { hkana: '0',  dkana: '０', to:'‘‘‘‘‘' },
    { hkana: '1',  dkana: '１', to:'’‘‘‘‘' },
    { hkana: '2',  dkana: '２', to:'’’‘‘‘' },
    { hkana: '3',  dkana: '３', to:'’’’‘‘' },
    { hkana: '4',  dkana: '４', to:'’’’’‘' },
    { hkana: '5',  dkana: '５', to:'’’’’’' },
    { hkana: '6',  dkana: '６', to:'‘’’’’' },
    { hkana: '7',  dkana: '７', to:'‘‘’’’' },
    { hkana: '8',  dkana: '８', to:'‘‘‘’’' },
    { hkana: '9',  dkana: '９', to:'‘‘‘‘’' },
    { hkana: 'ｦ',  dkana: 'を', to: '’‘‘‘' },
    { hkana: 'ｶ',  dkana: 'か', to: '’‘’’' },
    { hkana: 'ｸ',  dkana: 'く', to: '’’’‘' },
    { hkana: 'ｹ',  dkana: 'け', to: '‘’‘‘' },
    { hkana: 'ｺ',  dkana: 'こ', to: '‘‘‘‘' },
    { hkana: 'ｿ',  dkana: 'そ', to: '‘‘‘’' },
    { hkana: 'ﾁ',  dkana: 'ち', to: '’’‘’' },
    { hkana: 'ﾂｯ', dkana: 'つ', to: '’‘‘’' },
    { hkana: 'ﾆ',  dkana: 'に', to: '‘’‘’' },
    { hkana: 'ﾇ',  dkana: 'ぬ', to: '’’’’' },
    { hkana: 'ﾈ',  dkana: 'ね', to: '‘‘’‘' },
    { hkana: 'ﾉ',  dkana: 'の', to: '’’‘‘' },
    { hkana: 'ﾊ',  dkana: 'は', to: '‘’’’' },
    { hkana: 'ﾌ',  dkana: 'ふ', to: '‘‘’’' },
    { hkana: 'ﾏ',  dkana: 'ま', to: '‘’’‘' },
    { hkana: 'ﾛ',  dkana: 'ろ', to: '’‘’‘' },
    { hkana: 'ｳｩ', dkana: 'う', to: '’’‘' },
    { hkana: 'ﾅ',  dkana: 'な', to: '’‘’' },
    { hkana: 'ﾎ',  dkana: 'ほ', to: '‘’’' },
    { hkana: 'ﾔｬ', dkana: 'や', to: '’‘‘' },
    { hkana: 'ﾗ',  dkana: 'ら', to: '’’’' },
    { hkana: 'ﾘ',  dkana: 'り', to: '‘‘’' },
    { hkana: 'ﾚ',  dkana: 'れ', to: '‘‘‘' },
    { hkana: 'ﾜ',  dkana: 'わ', to: '‘’‘' },
    { hkana: 'ｲｨ', dkana: 'い', to: '’‘' },
    { hkana: 'ﾀ',  dkana: 'た', to: '‘’' },
    { hkana: 'ﾖｮ', dkana: 'よ', to: '‘‘' },
    { hkana: 'ﾞ',  dkana: '゛', to: '’’' },
    { hkana: 'ﾍ',  dkana: 'へ', to: '’' },
    { hkana: 'ﾑ',  dkana: 'む', to: '‘' }
];

/* ********************************************************
 * トゥートゥーデコーダー
 *
 * ネイティオ語(モールス信号)をかな変換するだけ。
 * 変換ページ開くのがめんどくさかったので作りました。
 *
 * ********************************************************/
function tootoo_decoder(message){
    for(var i = 0; i < tootoo.length; i++){
        message = message
            .replace(/トゥー/g, '‘')
            .replace(/トゥ/g, '’')
            .replace(new RegExp(tootoo[i].to, 'g'), tootoo[i].dkana);
    }
    return message.replace(/[ 　]/g, '');
}

function tootoo_encoder(message){
    message = message.replace(/[\u30a1-\u30f6]/g, function(match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    })
    .replace(/[ぁぃぅぇぉっゃゅょゎ]/g, function(match){
        var chr = match.charCodeAt(0) + 0x01;
        return String.fromCharCode(chr);
    })
    .replace(/[がぎぐげござじずぜぞだぢづでどばびぶべぼ]/g, function(match){
        var chr = match.charCodeAt(0) - 0x01;
        return String.fromCharCode(chr) + '゛';
    })
    .replace(/[ぱぴぷぺぽ]/g, function(match){
        var chr = match.charCodeAt(0) - 0x02;
        return String.fromCharCode(chr) + '゜';
    });
    for(var i = 0; i < tootoo.length; i++){
        var re = new RegExp('[' + tootoo[i].hkana + tootoo[i].dkana + ']', 'g');
        message = message.replace(re, tootoo[i].to + ' ');
    }
    return message.replace(/‘/g, 'トゥー').replace(/’/g, 'トゥ')
}
