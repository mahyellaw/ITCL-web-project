function toggleDescription(show=true, title="", description="", itemType="game") {
    if (show) {
        document.getElementById(itemType + "-description").style.display = "block";
        document.getElementById(itemType + "-description").children[0].innerHTML = title;
        if (itemType == "game") {
            document.getElementById(itemType + "-description").children[1].innerHTML = description;
        }
    }
    else {
        document.getElementById(itemType + "-description").style.display = "none";
    }
}