const year = 2020;

if (year % 400 === 0) {
    console.log(`西暦${year}年はうるう年です`);
} else {
    if (year & 4 === 0 && year % 100 !== 0) {
        console.log(`西暦${year}年はうるう年です`);
    } else {
        console.log(`西暦${year}年はうるう年ではありません`);
    }
}

/**
 * うるう年の条件は、400で割り切れる時
 * もしくは、4で割り切れる　かつ 100で割り切れない時に
 * || もしくは && かつ
 * !== 厳密不等価演算子
 */


// 更に短くまとめると
const year = 2020;

if (year % 400 === 0 ||( year % 4 === 0 && year % 100 !== 0)) {
    console.log(`西暦${year}年はうるう年です`);
} else {
    console.log(`西暦${year}年はうるう年ではありません`);
}