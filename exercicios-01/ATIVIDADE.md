# Atividade - Módulos

### 1) Criar um módulo `calculator.js` que calcule a soma de 2 números.

### 2) Criar um programa `use-calculator.js` que importe o módulo e informe 2 números para serem somados.

### Exemplo de funções:

```js
sayHelloInEnglish = function() {
  return "Hello";
};

sayHelloInSpanish = function() {
  return "Hola";
};

sayHelloInPortuguese = function() {
  return "Olá";
};
```

### Exemplo de funções encapsuladas em módulo:

```js
exports.sayHelloInEnglish = function() {
  return "Hello";
};

exports.sayHelloInSpanish = function() {
  return "Hola";
};

exports.sayHelloInPortuguese = function() {
  return "Olá";
};
```

```js
module.exports = {
    sayHelloInEnglish: function() {
      return "Hello";
    },

    sayHelloInSpanish: function() {
      return "Hola";
    },

    sayHelloInPortuguese: function() {
      return "Olá";
    }
}
```

```js
// es6
export function sayHelloInEnglish() {
  return "Hello";
}
export function sayHelloInSpanish() {
  return "Hola";
}
export function sayHelloInPortuguese() {
  return "Olá";
}
```

### Exemplo de importação de módulo:

```js
const greetings = require('./mymodule.js');

greetings.sayHelloInPortuguese();
```