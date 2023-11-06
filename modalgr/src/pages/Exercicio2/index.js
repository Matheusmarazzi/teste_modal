



export default function Ex2(){

  let aniversariante = ['']
  const texto = "matheus marazzi|emailbom.com|06/11/2003\njoao da silva|joao.com|23/10/2004\nmario cleber|emaildomario.com|15/11/2008\njubscreudo|jubs.com|13/02/2008"
  const obj = texto.split('\n')
  const mesAtual = new Date().getMonth() + 1

  const verifica = `/${mesAtual}/`

  obj.map((item)=>{
    let possui = null
    possui = item.match(verifica)

    if(possui !==null){
        aniversariante += item
    }

  })
  return(
    <div>
        <h1>Arquivo TXT geral:</h1>
        <p>{texto}</p>
        <h1>Arquivo TXT com aniversariantes do mês:</h1>
        <p>{aniversariante}</p>

    </div>
  )
}