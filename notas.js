aluno1= prompt("Nome do aluno")
notasAluno1= prompt("Nota das 3 unidades separadas por vírgula")
notasAluno1= notasAluno1.split(",")
nota1Unidade= notasAluno1[0]
nota2Unidade= notasAluno1[1]
nota3Unidade= notasAluno1[2]

soma = (parseFloat(nota1Unidade) + parseFloat (nota2Unidade) + parseFloat (nota3Unidade))
media1= soma / 3


aluno2= prompt("Nome do aluno")
notasAluno2= prompt("Nota das 3 unidades separadas por vírgula")
notasAluno2= notasAluno2.split(",")
nota1Unidade= notasAluno2[0]
nota2Unidade= notasAluno2[1]
nota3Unidade= notasAluno2[2]

soma = (parseFloat(nota1Unidade) + parseFloat (nota2Unidade) + parseFloat (nota3Unidade))
media2= soma / 3


aluno3= prompt("Nome do aluno")
notasAluno3= prompt("Nota das 3 unidades separadas por vírgula")
notasAluno3= notasAluno3.split(",")
nota1Unidade= notasAluno3[0]
nota2Unidade= notasAluno3[1]
nota3Unidade= notasAluno3[2]

soma = (parseFloat(nota1Unidade) + parseFloat (nota2Unidade) + parseFloat (nota3Unidade))
media3= soma / 3


aluno4= prompt("Nome do aluno")
notasAluno4= prompt("Nota das 3 unidades separadas por vírgula")
notasAluno4= notasAluno4.split(",")
nota1Unidade= notasAluno4[0]
nota2Unidade= notasAluno4[1]
nota3Unidade= notasAluno4[2]

soma = (parseFloat(nota1Unidade) + parseFloat (nota2Unidade) + parseFloat (nota3Unidade))
media4= soma / 3


aluno5= prompt("Nome do aluno")
notasAluno5= prompt("Nota das 3 unidades separadas por vírgula")
notasAluno5= notasAluno5.split(",")
nota1Unidade= notasAluno5[0]
nota2Unidade= notasAluno5[1]
nota3Unidade= notasAluno5[2]

soma = (parseFloat(nota1Unidade) + parseFloat (nota2Unidade) + parseFloat (nota3Unidade))
media5= soma / 3

if(media1>=5){
    alert(aluno1 + " Parabéns, aprovado com média de: " + media1)
}
else if(media1<5){
    alert(aluno1 + " Infelizmente você não foi aprovado, sua média foi de: " + media1)
}


if(media2>=5){
    alert("Parabéns " + aluno2 + " você foi aprovado com média " + media2)
}
else if(media2<5){
    alert("Olá " + aluno2 + ", infelizmente você não foi aprovado, sua média foi " + media2)
}

if(media3>=5){
    alert("Parabéns " + aluno3 + " você foi aprovado com média " + media3)
}
else if(media3<5){
    alert("Olá " + aluno3 + ", infelizmente você não foi aprovado, sua média foi " + media3)
}

if(media4>=5){
    alert("Parabéns " + aluno4 + " você foi aprovado com média " + media4)
}
else if(media4<5){
    alert("Olá " + aluno4 + ", infelizmente você não foi aprovado, sua média foi " + media4)
}

if(media5>=5){
    alert("Parabéns " + aluno5 + " você foi aprovado com média " + media5)
}
else if(media5<5){
    alert("Olá " + aluno5 + ", infelizmente você não foi aprovado, sua média foi " + media5)
}