
const NumberItem = ({ value, state, onClick }) => {

    return (
        <div className={`
                number
                ${state}
                border d-inline-block text-center user-select-none`}
            onClick={onClick}>
            {value}
        </div>
    )
}

export default NumberItem;

