try {
    const str1 = "abc"
    JSON.parse(str1)
} catch (error) {
    //正しいJSONではないのでパースできない
    console.log(error)
}

try {
    const str2 = "'abc'"
    JSON.parse(str2)
} catch (error) {
    //JSONでの文字列はシングルクオートで囲む必要があるため
    console.log(error)
}

try {
    const str4 = '{ "a" : undefined}'
    JSON.parse(str4)
} catch (error) {
    console.log(error)
    //undefiendは値として使用できないため
}


const str5 = '{ "a" : 123}'
JSON.parse(str5)

try {
    const str6 = '{ a : 123}'
    JSON.parse(str6)
} catch (error) {
    console.log(error)
    //JSONでの文字列はシングルクオートで囲む必要があるため
}

try {
    const str7 = '{"func":() => console.log("Hi!")}'
    JSON.parse(str7)
} catch (error) {
    console.log(error)
    //関数は値として使用できないため
}