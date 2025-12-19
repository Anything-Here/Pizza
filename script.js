async function getMyIP() {
    const url = 'https://api.2ip.io?token=19hqdu7c1fawprm5';
    let dataH2 = document.getElementById('infoH2')
    let musicAUDIO = document.getElementById('musicDATA')
    let titleH1 = document.getElementById('titleH1')
    let buttonIP = document.getElementById('buttonIP')
    let dodoIMG = document.getElementById('dodoIMG')
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        alert("Доставка пиццы оформлена")
        dataH2.innerHTML = "IP: " + data.ip + " <br>" + "Страна: " + data.country + " <br>" + "Город: " + data.city + " <br>"+ "Регион: " + data.region + " <br>" + "Широта: " + data.lat + " <br>" + "Долгота: " + data.lon + " <br>"
        dataH2.hidden = false
        buttonIP.hidden = true
        dodoIMG.hidden = false
        musicAUDIO.play()
        titleH1.innerText = "Пицца будет доставлена по этому адресу:"
        titleH1.style.color = "red"
        dataH2.style.color = "red"
        document.documentElement.requestFullscreen()

    } catch (error) {
        console.error("Failed to fetch IP:", error);
    }
}