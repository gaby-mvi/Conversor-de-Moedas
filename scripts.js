const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectedToConvert = document.querySelector(".currency-selected-to-convert")
const currencyConversionAudio = document.querySelector(".currency-conversion-audio")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em real
    const currencyValueConverted= document.querySelector(".currency-value") //Outras moedas
    
    const dolarToday = 4.94
    const euroToday = 5.34
    const libraToday = 6.22
    const bitcoinToday = 204352.52
    const dolarCanadenseToday = 3.64
    const ieneToday = 0.034
    const wonToday = 0.0038
    const pesoArgentinoToday = 0.014

    const dolarToEuro = 0.93
    const dolarToLibra = 0.80
    const dolarToBitcoin = 0.000024
    const dolarToDolarCanadense = 1.36
    const dolarToIene = 145.51
    const dolarToWon = 1318.54
    const dolarToPesoArgentino = 366.52
    
    const euroToDolar = 1.08
    const euroToReal = 5.36
    const euroToLibra = 0.86
    const euroToBitcoin = 0.000026
    const euroToDolarCanadense = 1.47
    const euroToIene = 156.93
    const euroToWon = 1421.94
    const euroToPesoArgentino = 395.29


    if (currencySelectedToConvert.value == "real-to") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    if (currencySelectedToConvert.value == "dolar-to") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (currencySelectedToConvert.value == "euro-to") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    //Conversão a partir do Real
    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    if (currencySelect.value == "dolar") {
        //Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue/dolarToday)
    }
    if (currencySelect.value == "euro") {
        //Se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }
    if (currencySelect.value == "libra") {
        //Se o select estiver selecionado o valor de libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue/libraToday)
    }
    if (currencySelect.value == "bitcoin") {
        //Se o select estiver selecionado o valor de bitcoin, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC",
            minimumSignificantDigits: 2,
            maximumSignificantDigits:6
        }).format(inputCurrencyValue/bitcoinToday)
    }    
    if (currencySelect.value == "dolarc") {
        //Se o select estiver selecionado o valor de dolar canadense, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue/dolarCanadenseToday)
    }
    if (currencySelect.value == "iene") {
        //Se o select estiver selecionado o valor de iene, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue/ieneToday)
    }
    if (currencySelect.value == "won") {
        //Se o select estiver selecionado o valor de won, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ko-KO", {
            style: "currency",
            currency: "KRW"
        }).format(inputCurrencyValue/wonToday)
    }
    if (currencySelect.value == "peso") {
        //Se o select estiver selecionado o valor de peso, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue/pesoArgentinoToday)
    }

    //Conversão a partir do Dólar Americano
    if (currencySelectedToConvert.value == "dolar-to" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (currencySelectedToConvert.value == "dolar-to" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*dolarToday)
    }
    if (currencySelectedToConvert.value == "dolar-to" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue*dolarToEuro)
    }
    if (currencySelectedToConvert.value == "dolar-to" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue*dolarToLibra)
    }
    if (currencySelectedToConvert.value == "dolar-to" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC",
            minimumSignificantDigits: 2,
            maximumSignificantDigits:6
        }).format(inputCurrencyValue*dolarToBitcoin)
    }    
    if (currencySelectedToConvert.value == "dolar-to" && currencySelect.value == "dolarc") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue*dolarToDolarCanadense)
    }
    if (currencySelectedToConvert.value == "dolar-to" && currencySelect.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue*dolarToIene)
    }
    if (currencySelectedToConvert.value == "dolar-to" && currencySelect.value == "won") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ko-KO", {
            style: "currency",
            currency: "KRW"
        }).format(inputCurrencyValue*dolarToWon)
    }
    if (currencySelectedToConvert.value == "dolar-to" && currencySelect.value == "peso") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue*dolarToPesoArgentino)
    }


    //Conversão a partir do Euro
    if (currencySelectedToConvert.value == "euro-to" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue*euroToDolar)
    }
    if (currencySelectedToConvert.value == "euro-to" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue*euroToday)
    }
    if (currencySelectedToConvert.value == "euro-to" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencySelectedToConvert.value == "euro-to" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue*euroToLibra)
    }
    if (currencySelectedToConvert.value == "euro-to" && currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC",
            minimumSignificantDigits: 2,
            maximumSignificantDigits:6
        }).format(inputCurrencyValue*euroToBitcoin)
    }    
    if (currencySelectedToConvert.value == "euro-to" && currencySelect.value == "dolarc") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue*euroToDolarCanadense)
    }
    if (currencySelectedToConvert.value == "euro-to" && currencySelect.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JA", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue*euroToIene)
    }
    if (currencySelectedToConvert.value == "euro-to" && currencySelect.value == "won") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ko-KO", {
            style: "currency",
            currency: "KRW"
        }).format(inputCurrencyValue*euroToWon)
    }
    if (currencySelectedToConvert.value == "euro-to" && currencySelect.value == "peso") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue*euroToPesoArgentino)
    }
    currencyConversionAudio.play()
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar-americano.png"
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if (currencySelect.value == "dolarc") {
        currencyName.innerHTML = "Dólar Canadense"
        currencyImage.src = "./assets/dolar-canadense.png"
    }
    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene"
        currencyImage.src = "./assets/iene.png"
    }
    if (currencySelect.value == "won") {
        currencyName.innerHTML = "Won"
        currencyImage.src = "./assets/won.png"
    }
    if (currencySelect.value == "peso") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = "./assets/peso-argentino.png"
    }
    convertValues()
}

function changeCurrencyConvert() {
    const currencyNameConvert = document.getElementById("currency-name-conversion")
    const convertImage = document.querySelector(".convert-img")

    if (currencySelectedToConvert.value == "real-to") {
        currencyNameConvert.innerHTML = "Real"
        convertImage.src = "./assets/real.png"
    }
    if (currencySelectedToConvert.value == "dolar-to") {
        currencyNameConvert.innerHTML = "Dólar Americano"
        convertImage.src = "./assets/dolar-americano.png"
    }
    if (currencySelectedToConvert.value == "euro-to") {
        currencyNameConvert.innerHTML = "Euro"
        convertImage.src = "./assets/euro.png"
    }
    convertValues()
}

currencySelectedToConvert.addEventListener("change", changeCurrencyConvert)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)