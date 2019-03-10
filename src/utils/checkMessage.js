import FastScanner from 'fastscan'

export default function checkMessage(value) {
    let words = '法轮功,李洪志,习近平,江泽民,胡锦涛,李克强,毛泽东,法轮,法轮大法,自由门,翻墙,八九学潮,天安门,人权,温家宝,共产党,退党,美国之音,CNN,洪志,泽民,泽东,锦涛,克强,学潮'
    let wordList = words.split(',')
    let scanner = new FastScanner(wordList)
    let offWords = scanner.search(value)
    if (offWords.length!==0){
        return true
    } else {
        return false
    }
}