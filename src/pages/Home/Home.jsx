import { Discount } from '../../components/discount/Discount.jsx'
import { Main } from './main/Main.jsx'
import { Header } from '../../components/header/Header.jsx'
import { Featured } from './featured/Featured.jsx'
import { Cards } from './cards/Cards.jsx'
import { Shop } from './shop/Shop.jsx'
import { CustomerExperienceIncentives } from './CustomerExperienceIncentives/CustomerExperienceIncentives.jsx'
import { FAQ } from './FAQ/FAQ.jsx'
import { Subscription } from './subscription/Subscription.jsx'
import { Footer } from '../../components/footer/Footer.jsx'

export function Home() {
    return (
        <>
            <Discount />
            <Header />
            <Main />
            <Featured />
            <Cards />
            <Shop />
            <CustomerExperienceIncentives />
            <FAQ />
            <Subscription />
            <Footer />
        </>
    )
}