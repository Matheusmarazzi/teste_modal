import './style.css';



export default function Ex1(){
    const senhas = [12345, 54321, 1325]
    const chaveSecreta = '#modalGR#GPTW#top#maiorEmpresaTecnologia#baixadaSantista'

    function subs(senha, chave){
        let encrip = senha + chave;
        encrip = encrip.replace(/4/g, 'A').replace(/3/g, 'E').replace('GR', 6).replace('a', 320).replace('Tec', 140)
        return encrip
    }

    return(
        <div id='Ex1'>
            <h1>Desafio 1</h1>
            <h3>Senhas:</h3>
            {senhas.map((item)=>{
                return <p>{item}</p>
            })}
            <h3>Senhas encriptadas:</h3>
            {senhas.map((item)=>{
                let test = subs(item, chaveSecreta)
                return <p>{test}</p>
            })}
        </div>
    )


}