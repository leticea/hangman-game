const words = [
  { word: "abacaxi", clue: "Fruta tropical" },
  { word: "elefante", clue: "Animal de grande porte" },
  { word: "computador", clue: "Dispositivo eletrônico" },
  { word: "girafa", clue: "Pescoço longo" },
  { word: "chocolate", clue: "Doce feito de cacau" },
  { word: "piano", clue: "Instrumento musical com teclas" },
  { word: "tigre", clue: "Felino selvagem" },
  { word: "esmeralda", clue: "Tipo de pedra preciosa" },
  { word: "navio", clue: "Embarcação" },
  { word: "telefone", clue: "Dispositivo de comunicação" },
  { word: "floresta", clue: "Área com muitas árvores" },
  { word: "quadrado", clue: "Figura geométrica" },
  { word: "foguete", clue: "Veículo espacial" },
  { word: "sorvete", clue: "Doce gelado" },
  { word: "bicicleta", clue: "Possui duas rodas" },
  { word: "avião", clue: "Meio de transporte" },
  { word: "macaco", clue: "Primata" },
  { word: "raios", clue: "Descargas elétricas na atmosfera" },
  { word: "montanha", clue: "Elevação natural da terra" },
  { word: "vela", clue: "Objeto para iluminação" },
  { word: "friends", clue: "Série de comédia famosa" },
  { word: "mercúrio", clue: "Menor planeta do sistema solar" },
];

export default function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
