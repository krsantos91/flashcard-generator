var ClozeCard = function(text,cloze){
    let clozeCheck  = text.search(cloze);
    if (clozeCheck === -1){
        console.log("Error. Cloze phrase was not located in full text phrase.")
    }else{
        this.cloze = cloze;
        this.fullText  = text;
        this.partial = text.replace(cloze,"...");
    };
}

module.exports = ClozeCard;
