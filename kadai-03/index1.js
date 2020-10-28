const day = parseInt(process.argv[2])

if (day % 4 === 0 ){
    console.log('あなたはAAAな性格です')

}   else if(day % 5 === 0 ){
    console.log('あなたはBBBな性格です')

}   else {
    console.log('あなたはCCCな性格です')
}