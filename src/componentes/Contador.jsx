import React, {useState} from "react";
import { Text, Button, View } from "react-native";
import Estilos from "../estilos";

export default ({ inicial = 0, passo = 1 }) => {

    const [numero, setNumero] = useState(inicial);
    const [result, setResult] = useState('');

    function inc(){
       setNumero(numero + passo);
    }

    function dec(){
        setNumero(numero - passo);
    }

    const verificaDivisao = _=> numero % 2 == 0 ? setResult('Par') : setResult('Impar');
    return (
        <>
            <Text style={Estilos.textDois}>
                {numero}
            </Text>
            <View style={{flexDirection: "row"}}>
                <Button 
                    title="+"
                    onPress={inc}
                />
                <Button
                    title="-"
                    onPress={dec}
                /><Button
                title="%"
                onPress={verificaDivisao}
            />
            <Text style={Estilos.textDois}>
                {result}
            </Text>
            </View>
            
        </>
        
    )

}