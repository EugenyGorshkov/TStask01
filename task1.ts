// Напишите и типизируйте функцию, рассчитывающую стоимость с учетом скидки и рассрочки на заданное количество месяцев:
interface TotalPriceArgs {
    price: number
    discount: number
    isInstallment: boolean
    months: number
}

const totalPrice = ({ price, discount, isInstallment, months }:TotalPriceArgs): number => {
    let res:number

    if(isInstallment) {
        return res = (price - (price * Number(`0.${discount}`))) / months
    } else {
        return res = (price - (price * Number(`0.${discount}`))) / months
    }

};

console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));
// 6250