export function Text ({ademoji}) {

    const text = "i am js programing language"

    return (
        <>
        <div>{ademoji ? ademoji(text, "❤️") : text }</div>
        </>
    )
}
