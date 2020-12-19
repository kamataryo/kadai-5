const animals = ['dog' , 'cat' , 'bear' , 'deer' , 'rabbit' ]
for (let index = 0; index < animals.length; index++) {
    const animal = animals[index];
    console.log(animal)
}

for (const animal of animals) {
    console.log(animal)
}