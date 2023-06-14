import React from 'react'
import classNames from 'classnames'
import {FaBitcoin} from 'react-icons/fa'

interface InputFieldProps {
    currency: string
    placeholder?: string
    value: number
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    name: string
}

const InputField: React.FC<InputFieldProps> = ({currency, placeholder, value, onChangeHandler, name}) => {
  return (
    <div className={classNames("relative mt-2 rounded-md shadow-sm")}>
        <div className={classNames("pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3")}>
          <span className={classNames("text-gray-500 sm:text-sm")}><FaBitcoin/></span>
        </div>
        <input 
            value={value ? value: '' } 
            type="number" 
            name={name} 
            onChange={onChangeHandler}
            className={classNames("block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6")} 
        />
        <div className={classNames("pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3")}>
          <span className={classNames("text-gray-500 sm:text-sm")}>{currency}</span>
        </div>
      </div>
  )
}


export default InputField