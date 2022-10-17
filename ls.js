const btn =document.querySelector('#btn')
btn.addEventListener("click",function () {
 let di =document.querySelector('#dinheiro').value
 let va = document.querySelector('#desconto').value
let resultado = document.querySelector('#resultado')
if (di !==''&& va !== '') {
    let valorDesconto = di * va / 100
        resultado.textContent = `O Valor do seu desconto é R$${valorDesconto} Reais`
    
}
 else{
    resultado.textContent = "Preencha todos os campos"
 }
})