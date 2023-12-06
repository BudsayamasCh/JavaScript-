const statuss = 700;

 switch (statuss) {
    case 200:
        console.log('OK!');
        break;
    case 400:
    case 500: 
        console.log('Error!');
        break;
    default:
        console.log('Unknown sattus');
        break;
 }