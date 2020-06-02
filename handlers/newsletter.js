function newsletter(message, args) {
    let obj;
    let response = fetch('https://api.github.com/users/nnnnnnnnnniiiiiiiiiikkkkkkk')
            .then(response => response.json())
            .then(file => obj = file)
            .then(()=> console.log(obj.html_url));
}

module.exports = {newsletter: newsletter};