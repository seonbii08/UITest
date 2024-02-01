async function func() {
    const json = await fetch("http://994324.42534.2413425324.6543634.56346/userAll");
    const datas = await json.json();

    console.log(datas)
    console.log(json)
} 