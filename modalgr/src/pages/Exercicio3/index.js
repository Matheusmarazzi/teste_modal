import {useState} from 'react';


export default function Ex3(){
    const [valido, setValido] = useState(true)
    const [salario, setSalario] = useState(300)
    const [tempo, setTempo] = useState(5)
    const [retirada, setRetirada] = useState(2)
    const [tipo, setTipo] = useState()

    //armazenando notas
    let cem = 0
    let cinq = 0
    let vin = 0
    let dez = 0
    let cinc = 0
    let dois = 0

    function calculaAlto(valor){
        while (valor >= 100) {
            cem += 1
            valor -= 100;
          }
        
          while (valor >= 50) {
            cinq += 1
            valor -= 50;
          }
    }


    function calculaBaixo(valor){
        while (valor >= 20) {
            vin += 1
            valor -= 20;
          }
        
          while (valor >= 10) {
            dez += 1
            valor -= 10;
          }
        
          while (valor >= 5) {
            cinc += 1
            valor -= 5;
          }
          while (valor >= 2) {
            dois += 1
            valor -= 2;
          }
          
    }


    function handleFinish(valor, prefe, salario, tempo){
        let sobra
        if(valor > (salario*2)){
            setValido(false)
            return
        }
        if(valor % 2 !== 0){
            setValido(false)
            return
        }
        if(tempo < 5){
            setValido(false)
            return
        }
        if(prefe == 1){
            calculaAlto(valor)
            sobra = valor - ((cinq*50)+(cem*100))
            if(sobra > 0){
                calculaBaixo(sobra)
            }
            
        }
        if(prefe == 2){
            calculaBaixo(valor)
        }
        if(prefe == 3){
            let metade = valor/2
            calculaAlto(metade)
            calculaBaixo(metade)
            
        }

    }

    
    
    






    return(
        <div>
            {(!valido) ? "Agradecemos seu interesse, mas você não atende os requisitos mínimos do programa": 
                (<>
                    <input type="text" value={salario} onChange={(e)=>setSalario(e.target.value)} />
                    <input type="text" value={tempo} onChange={(e)=>setTempo(e.target.value)} />
                    <input type="text" value={retirada} onChange={(e)=>setRetirada(e.target.value)} />
                    <label>
                        <input
                        type="radio"
                        value="1"
                        checked={tipo === '1'}
                        onChange={(e)=>{setTipo(e.target.value)}}
                        />
                        maior valor
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="2"
                        checked={tipo === '2'}
                        onChange={(e)=>{setTipo(e.target.value)}}
                        />
                        menor valor
                    </label>
                    <label>
                        <input
                        type="radio"
                        value="3"
                        checked={tipo === '3'}
                        onChange={(e)=>{setTipo(e.target.value)}}
                        />
                        meio a meio
                    </label>
                    <button onClick={handleFinish(retirada, tipo, salario, tempo)}>Finalizar</button>
                        {'100:'+cem+'\n'}
                        {'50:'+cinq+'\n'}
                        {'20:'+vin+'\n'}
                        {'10:'+dez+'\n'}
                        {'5:'+cinc+'\n'}
                        {'2:'+dois+'\n'}    
                    
            </>) }
           
            
        </div>
    )
}