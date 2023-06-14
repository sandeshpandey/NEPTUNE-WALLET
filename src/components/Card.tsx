import classNames from 'classnames'

interface CardProps{
    children: React.ReactNode
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={classNames('bg-white rounded-lg shadow-lg p-4  mx-5 md:w-2/3' )}>{props.children}</div>
  )
}

export default Card