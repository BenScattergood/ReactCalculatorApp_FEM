export default function Key({ theme, value, features, clickEvent }) {
    return (
        <div onClick={() => clickEvent(value)} className={`keys__key ${theme} ${features}`}>
            <p>{value}</p>
        </div>
    )
}