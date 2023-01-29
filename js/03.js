
    let tax = (salary, marriage) => {
    let percentage = 0;
    switch(marriage) {
    case 'y' : if(salary >= 3000) { percentage = 0.25} break;
    case 'n' : (salary < 6000) ? percentage = 0.15 : percentage = 0.35; break;
    default : percentage = 0.1; break;
}
    return salary * percentage;
}

