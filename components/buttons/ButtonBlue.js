const ButtonBlue = ({text, onClick}) => {
  return (
    <button className='bg-[#384aeb] px-11 py-3.5 md:text-base text-sm text-white rounded-full font-semibold hover:bg-transparent border hover:border hover:border-[#384aeb] hover:text-gray-800 transition duration-500 ease-in-out' onClick={onClick}>{text}</button>
  )
}

export default ButtonBlue