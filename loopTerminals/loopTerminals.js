const loopTerminals = (terminals) => {
    let result = false
    let terminalName = terminals.map(terminal => terminal.name)
    terminalName.forEach(name => {
        if(name === null || "") {
            console.log(name)
            result = true;
        };
    });
    return result;
}

module.exports = loopTerminals;