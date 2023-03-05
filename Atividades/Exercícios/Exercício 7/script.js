let arrnum = []
let adic = document.getElementById('num')
let tab = document.getElementById('selnum')
let res = document.getElementById('res')

function adicionar(){
    n = Number(adic.value)
    c = 0
    if (n < 1 || n > 100 || arrnum.indexOf(n) != -1){
        window.alert(`O número ${n} não é compatível com as regras ou já foi adicionado anterirormente. Por favor, digite um número de 1 a 100.`)
    } else {
        arrnum.push(n)
        let item = document.createElement('option')
        item.text = `Número ${n} adicionado!`
        item.value = c
        c++
        tab.appendChild(item)
        res.innerHTML = ''
    }
    adic.value = ''
    adic.focus()
   
}


function finalizar () {
    if (arrnum.length == 0) {
        window.alert ("Não foi identificado nenhum número adicionado. Por favor adicione um número!")
    } else {
        let maior = arrnum[0]
        let menor = arrnum[0]
        let soma = 0
        let media = 0
        for(let pos in arrnum) {
            soma += arrnum[pos]
            if (arrnum[pos] > maior)
                maior = valores[pos]
            if (arrnum[pos] < menor)
                menor = valores[pos]
        }
        media = soma / arrnum.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${arrnum.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi o ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi o ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}