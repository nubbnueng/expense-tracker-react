const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const amountWithdDollarSign = (amount) => {
    return amount < 0 ? `-$${amount * -1}` : `$${amount}`
}

export default (amount) => {
    return numberWithCommas(amountWithdDollarSign(amount))
}