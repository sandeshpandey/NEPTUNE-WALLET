import {BsArrowDownUp} from "react-icons/bs"
import Card from "../components/Card"
import InputField from "../components/InputField"
import Wallet from "../container/Wallet"
import classNames from "classnames"
import { useState } from "react"
import Head from "next/head"

type CurrencyType = {
  nep: number
  busd: number
}

const Home = () => {
  const[currency, setCurrency] = useState<CurrencyType>({
    nep: 0,
    busd: 0,
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const obj: CurrencyType = {
      nep: 0,
      busd: 0,
    }
    const value = e.target.value
    if(e.target.name === 'nep'){
      obj.busd = parseFloat((+value * 3).toFixed(2))
      obj.nep = parseFloat(value)
    }else{
      obj.nep = parseFloat((+value / 3).toFixed(2))
      obj.busd = parseFloat(value)
    }
    setCurrency(obj)
  }

  return (
    <div className={classNames("flex flex-col justify-center items-center bg-emerald-200 min-h-screen")}>
      <Head>
        <title>Neptune Mutual Wallet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className={classNames('text-center text-5xl font-semibold mb-5 text-slate-700')}>Neptune Mutual</h1>
      <Card>
        <h1 className={classNames('text-center text-slate-900 pb-2')}>Cyptro Converter</h1>
        <InputField currency ={'NEP'} value={currency.nep} name="nep" onChangeHandler={onChangeHandler}/>
        <div className={classNames('flex justify-center items-center my-3')}>
          <BsArrowDownUp/>
        </div>
        <InputField currency ={'BUSD'} value={currency.busd} name="busd" onChangeHandler={onChangeHandler} />
        <Wallet />
      </Card>
    </div>
  );
};

export default Home;
