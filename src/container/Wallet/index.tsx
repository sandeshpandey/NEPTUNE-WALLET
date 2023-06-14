import { useEffect, useState } from 'react'
import classNames from 'classnames'
import Modal from "../../components/Modal"
import { useWeb3React } from "@web3-react/core"
import {injected} from "../../utils/connector"
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units';

const Wallet = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [balance, setBalance] = useState<unknown>()
    const { active, account, library, chainId, activate, deactivate } = useWeb3React<Web3Provider>()

    const getBalance = () => {
        if(!!active && !!account && !!library){
            library.getBalance(account).then((balance: unknown) => {
                console.log(balance)
                setBalance(balance)
            }).catch((error) => {
                console.log(error)
                setBalance(null)
            })
        }  
    }

    useEffect(()=> {
        getBalance()
    }, [active, library, account])


    async function connect() {
        try {
        await activate(injected)
        } catch (ex) {
        console.log(ex)
        }
    }

    async function disconnect() {
        try {
        deactivate()
        } catch (ex) {
        console.log(ex)
        }
    }

    const WallentConnect = async() => {
        await connect()
        setIsOpen(true)
    }
    return (
    <>
        <p onClick={WallentConnect} className={classNames('text-center pt-2 underline hover:cursor-pointer text-slate-900')}>Check your Walet status</p>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title='Your Wallet Information' isConnected={active} onConnect={connect} onDisconnect={disconnect}>
            {!active ? <p className={classNames("text-sm text-gray-500")}>Your wallet is not connected please connect you wallet</p>: (
                <>
                    <p className={classNames("text-sm text-gray-500")}>Account: {account}</p>
                    <p className={classNames("text-sm text-gray-500")}>Chain ID: {chainId}</p>
                    <p className={classNames("text-sm text-gray-500")}>Balance: {formatEther(balance)}</p>
                </>
            )}
            
        </Modal>
    </>
    )
}

export default Wallet