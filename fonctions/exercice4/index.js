function computeVat(price, vat = 1.2)
{
    return price * vat;
}

function computePrice(lowVatPrices, highVatPrices)
{
    let total = 0;

    for(let lowPrice of lowVatPrices)
    {
        total = total + computeVat(lowPrice, 1.1);
    }

    for(let highPrice of highVatPrices)
    {
        total = total + computeVat(highPrice);
    }

    return total;
}

console.log(computePrice([10, 15], [20]));
console.log(computePrice([13], [20, 50, 8]));
console.log(computePrice([20], [20]));