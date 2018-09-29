function printFigure(n) {
    if (n > 2) {
        let rows = n;
        if (n % 2 === 0) {
            rows--;
        }
        let halfRows = (rows - 3) / 2;

        let result = `+${"-".repeat(n - 2)}+${"-".repeat(n - 2)}+\n`;
        for (let i = 0; i < halfRows; i++) {
            result += `|${" ".repeat(n - 2)}|${" ".repeat(n - 2)}|\n`;
        }

        result += `+${"-".repeat(n - 2)}+${"-".repeat(n - 2)}+\n`;
        for (let i = 0; i < halfRows; i++) {
            result += `|${" ".repeat(n - 2)}|${" ".repeat(n - 2)}|\n`;
        }

        result += `+${"-".repeat(n - 2)}+${"-".repeat(n - 2)}+`;

        console.log(result)
    } else {
        console.log("+++");
    }
}

printFigure(2)