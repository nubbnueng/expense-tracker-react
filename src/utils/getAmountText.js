export default (amount) => amount < 0 ? `-$${amount * -1}` : `$${amount}`