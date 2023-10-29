interface Props {
    subs: Array<{
        nick: string,
        avatar: string,
        subMonths: number,
        description?: string
    }>
}



export default function List ({subs}: Props) {
    return (
        <ul>
        {
          subs.map(sub => {
            return(
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0, 100)}</p>
                {/* el ? se coloca solo, analiza si es string o undefine -- substring y acalro que solo quiero que aparezcan los 100 promeros caracteres de la descripcion */}
              </li>
            )
          })
        }
      </ul>
    )
}