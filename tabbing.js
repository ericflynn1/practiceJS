function tabOnEm(xtra) {
    let addTab = xtra + 1;
    console.log(xtra + ": " + addTab);
    while (addTab > 4) {
        addTab = addTab - 4;
        console.log(xtra + ": " + addTab);        
    }
    return xtra + (4 - addTab);
}

console.log(tabOnEm(17));