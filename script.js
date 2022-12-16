let age = prompt ("How old are you?", "Number")
Number(age) <= 17 ? confirm("Do you study at school?") :
    Number(age) > 17 && Number(age) < 25 ? confirm("Do you study at university?") :
        Number(age) >= 25 && Number(age) < 60 ? confirm("Do you have a job?") : confirm("What are you doing?");


let display = prompt('Enter the property display:', 'property')
switch(display){
    case 'block':
        alert('display: ' + display);
        break;
    case 'flex':
        alert('display: ' + display);
        break;
    case 'grid':
        alert('display: ' + display);
        break;
    case 'inline':
        alert('display: ' + display);
        break;
    case 'none':
        alert('display: ' + display);
        break;
    default:
        alert("Set 'display: inline-block;'");;
 }

let numb = prompt('Enter the number:', 0);
while (!Number(numb))
{
    numb = prompt('Enter the number:', 0);
}

alert(`Your numer is: ${numb}
        and if multiply by 12 is: ${numb * 12}`);

for (let i = 2; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

