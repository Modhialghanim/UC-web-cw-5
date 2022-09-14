alert('مرحباً بك في موقعي! انا موضي ، وسوف احسب درجتك');
let grade=prompt("enter ur grade");
console.log('grade');

if(grade>=90 && grade <=100){
    console.log('لقد حصلت على امتياز');
}
else if(grade<=89 && grade >=80 ){
    console.log('لقد حصلت على جيد جداً');
}
else if (grade >=70 && grade <=79){
    console.log('لقد حصلت على جيد');
}
else if (grade >=60 && grade <= 69){
    console.log('قد حصلت على مقبول');

}
else if(grade >= 50 && grade <= 59){
    console.log('قد حصلت على ضعيف');
}
else if( grade <50){
    console.log('راسب')
}
