function copy() {
    if (navigator.clipboard) {
        navigator.clipboard.writeText("ypete")
            .then(() => {
                alert("Username copied to clipboard!");
            })
            .catch(err => {
                console.error("Copy error!", err);
            });
    } else {
        
    }
}