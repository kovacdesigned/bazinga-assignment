function bazinga() {
    for (let i = 1; i < 100; i++) {
        let output = "";

        if (i % 2 == 0) {
            output += "Baz";
        }
        if (i % 5 == 0) {
            output += "inga!";
        }

        if (!output) {
            console.log(i);
            continue;
        }
        
        console.log(output);
    }
}

bazinga()