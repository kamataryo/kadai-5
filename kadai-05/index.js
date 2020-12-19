const profile = {
    name: 'Ayane' ,
    age: 22 ,
    hobby: 'reading' ,
    major: 'literature'
}

console.log(profile.name)
console.log(profile['age'])

const keys = Object.keys(profile)
console.log(keys)

for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    console.log('私の' + key + 'は、' + profile[key] + 'です。')
}