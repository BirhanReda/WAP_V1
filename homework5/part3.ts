
async function fetchWrongUrl() {

    try {
        const res = await fetch('https://wrongurl123456789.com/');
        const r = await res.json();

        console.log(r);
        console.log("wrong url");

    } catch (error) {
        console.log(error);

    }


}
fetchWrongUrl();