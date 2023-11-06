



export default function Ex1(){
    const senhas = [12345, 54321, 1325]
    const chaveSecreta = '#modalGR#GPTW#top#maiorEmpresaTecnologia#baixadaSantista'

    


    function subs(senha, chave){
        let encrip = senha + chave;
        encrip = encrip.replace(/4/g, 'A').replace(/3/g, 'E').replace('GR', 6).replace('a', 320).replace('Tec', 140)
        return encrip
    }

    
    return(
        <div>
            <h1>Senhas:</h1>
            {senhas.map((item)=>{
                return <h1>{item}</h1>
            })}
            <h1>Senhas encriptadas:</h1>
            {senhas.map((item)=>{
                let test = subs(item, chaveSecreta)
                return <h1>{test}</h1>
            })}
        </div>
    )


}