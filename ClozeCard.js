var fs = require("fs");

module.exports = ClozeCard;

function ClozeCard(text, cloze) {
    if (this instanceof ClozeCard) {
        this.text = text;
        this.cloze = cloze;
    } else {
        return new ClozeCard(text, cloze);
    }
    //Converting input text to lowercases
    this.text = text.toLowerCase();
    this.cloze = cloze.toLowerCase();
    //replaces the text in the beginning of the cloze statement with "..."
    this.partial = this.text.replace(this.cloze, "...");
    this.fullText = text;

    //function to error the input if the cloze statement is not set up with the Cloze answer in the statement(text)
    //and in the cloze
    if (!this.text.includes(this.cloze)) {
        console.log("ERROR, cloze-deletion invalid format");
        return;
    }
}
