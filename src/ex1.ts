interface ITotalPriceDTO {
    price: number
    discount: number
    isInstallment: boolean
    months: number
}

const totalPrice = ({price, discount, isInstallment, months}: ITotalPriceDTO): number => {
    if (price <= 0) throw new Error(`Price must be a number > 0`)
    if (discount < 0 || discount >= 100) throw new Error(`Discount must be a number >= 0 and < 100 `)
    if (isInstallment && months < 0) throw new Error(`Months must be a number >= 0`)
    return Math.round(((price - (price * (discount / 100))) / (isInstallment ? months : 1)) * 100) / 100
};

const price = totalPrice({price: 100000, discount: 25, isInstallment: true, months: 12});
console.log(price);