const objectGenerator = (key: string, value: any): any => {
  return { [key]: value }
}

const anyAkey: string = 'algumaChave'
const anyValue: string = 'algumValor'


objectGenerator(anyAkey, anyValue)